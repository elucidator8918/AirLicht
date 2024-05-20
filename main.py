from fastapi import FastAPI, UploadFile, File, HTTPException, Body, Depends, HTTPException, status, Header
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from passlib.context import CryptContext
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uuid
import os
import uvicorn
from fastapi.responses import FileResponse
import asyncio
import gc
from deepface import DeepFace
from sqlalchemy import create_engine, Column, Integer, String, Sequence, LargeBinary
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime
import re
import jwt
from jwt import PyJWTError
import google.generativeai as genai

port=8888
gc.collect()

DATABASE_URL = os.environ.get('DATABASE_URL')
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))
gemini = genai.GenerativeModel('gemini-pro')

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

SECRET_KEY = "your_secret_key_here"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class TTSNER(BaseModel):
    text: str
    emotion: str = "Cheerful & Professional"

class UserDB(Base):
    __tablename__ = "users"
    id = Column(Integer, Sequence("user_id_seq"), primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password = Column(String)
    image = Column(LargeBinary)

Base.metadata.create_all(bind=engine)

def extract(email):
    return re.match(r'([^@]+)@', email).group(1)

def remove(known_image_path,test_image_path):
    os.remove(known_image_path)
    os.remove(test_image_path)

def create_access_token(data: dict, expires_delta: datetime.timedelta = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.datetime.utcnow() + expires_delta
    else:
        expire = datetime.datetime.utcnow() + datetime.timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def decode_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except PyJWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate credentials")

app = FastAPI(title="Airbus 2024 Backend")

app.add_middleware(
CORSMiddleware,
allow_origins=["*"],
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],
)

@app.get("/")
async def home():
    return "Airlicht is Running"

@app.post("/signup/")
async def signup(form_data: OAuth2PasswordRequestForm = Depends(), img: UploadFile = File(...)):
    db = SessionLocal()
    try:
        existing_user = db.query(UserDB).filter(UserDB.username == form_data.username.lower()).first()
        if existing_user:
            raise HTTPException(status_code=400, detail="Username already exists")
        img_binary_data = None
        if img:
            img_path = f"{uuid.uuid4()}.jpg"
            with open(img_path, "wb") as img_file:
                img_file.write(img.file.read())
            with open(img_path, "rb") as img_file:
                img_binary_data = img_file.read()
        result = DeepFace.extract_faces(img_path,enforce_detection=False)[0].get('confidence')
        os.remove(img_path)
        hashed_password = pwd_context.hash(form_data.password)
        if result<0.5:
            return {"message":"Face could not be detected. Please confirm that the picture is a face photo."}
        new_user = UserDB(username=form_data.username.lower(), password=hashed_password, image=img_binary_data)
        db.add(new_user)
        db.commit()
        return {"message": "User registered successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()

@app.post("/login/")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), img: UploadFile = File(...)):
    db = SessionLocal()
    user = db.query(UserDB).filter(UserDB.username == form_data.username.lower()).first()
    if user is None or not pwd_context.verify(form_data.password,user.password):
        db.close()
        raise HTTPException(status_code=401, detail="Invalid credentials")
    try:
        known_image_path = f"{uuid.uuid4()}.jpg"
        test_image_path = f"{uuid.uuid4()}.jpg"
        async def remove():
          loop = asyncio.get_event_loop()
          await loop.run_in_executor(None, lambda: os.remove(known_image_path))
        with open(known_image_path, "wb") as known_image_file:
            known_image_file.write(user.image)
        with open(test_image_path, "wb") as test_image_file:
            test_image_file.write(img.file.read())
        result = DeepFace.verify(known_image_path, test_image_path, model_name='Facenet512', distance_metric='euclidean_l2').get('verified')
        os.remove(test_image_path)
        if result:
          access_token_expires = datetime.timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
          access_token = create_access_token(
              data={"sub": user.username}, expires_delta=access_token_expires
          )
          db.close()
          return FileResponse(known_image_path,headers={"message":"Login Successful","access_token": access_token,
                                                        "token_type": "bearer","name":extract(user.username),
                                                        "Content-Disposition":f"attachment; filename={known_image_path}"},background=remove)
        else:
          db.close()
          return HTTPException(status_code=699, detail="Incorrect Face Detected")
    except Exception as e:
        remove(known_image_path,test_image_path)
        if str(e)=='''Face could not be detected. Please confirm that the picture is a face photo or consider to set enforce_detection param to False.''':
            raise HTTPException(status_code=399, detail="Face could not be detected. Please confirm that the picture is a face photo.")
        else:
            raise HTTPException(status_code=500, detail=str(e))

@app.post("/recommendation/")
async def langmod(request: TTSNER = Body(...), token: str = Header(...)):
    try:
      decoded_token = decode_token(token)
      result = model.generate_content(request.text+". Make the output consise and limited within 128 words.").text
      return {"text":result}
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
