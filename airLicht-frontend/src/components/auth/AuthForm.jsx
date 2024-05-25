import React, { useState, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { login, signup } from "../../services/operations/authAPI";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import Webcam from "react-webcam";
import { TypeAnimation } from "react-type-animation";

const AuthForm = ({ formType }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  // create a capture function
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    img: imgSrc,
  });

  const [showPass, setShowPass] = useState(false);

  const formChangeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      toast.error("All fields are required!");
      return;
    }

    setFormData({
      ...formData,
      img: imgSrc,
    });

    if (!formData.img) {
      toast.error("Please capture image!");
      return;
    }

    // Convert base64 image to a File object
    const dataUrlToFile = (dataurl, filename) => {
      const arr = dataurl.split(",");
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    };

    const imgFile = dataUrlToFile(imgSrc, "profile.jpg");

    const formDataTOSend = new FormData();
    formDataTOSend.append("username", formData.username);
    formDataTOSend.append("password", formData.password);
    formDataTOSend.append("img", imgFile);

    if (formType === "login") {
      dispatch(login(formDataTOSend, navigate));
    } else {
      dispatch(signup(formDataTOSend, navigate));
    }
  };

  return (
    <div className="relative mx-auto flex flex-col max-w-maxContent w-11/12 items-center text-white justify-between md:justify-center mt-20">
      {formType === "login" ? (
        <div className="p-4 m-4">
          <h1 className="text-2xl font-bold mb-2">
          <TypeAnimation className="text-3xl font-bold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FF] to-[#A6FFCB] bg-clip-text text-transparent"
                  sequence={["Login", 1000, ""]}
                  speed={10}
                  cursor={true}
                  repeat={Infinity}
                  omitDeletionAnimation={true}
                />
          </h1>
        </div>
      ) : (
        <div className="p-4 m-4">
          <h1 className="text-2xl font-bold mb-2">
          <TypeAnimation className="text-3xl font-bold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FF] to-[#A6FFCB] bg-clip-text text-transparent"
                  sequence={["Sign Up", 1000, ""]}
                  speed={10}
                  cursor={true}
                  repeat={Infinity}
                  omitDeletionAnimation={true}
                />
          </h1>
        </div>
      )}
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-y-4 mt-2 w-full md:w-[450px]"
      >
        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Username<sup className="text-pink-200"> *</sup>
          </p>
          <input
            required
            type="email"
            name="username"
            id="username"
            value={formData.username}
            onChange={formChangeHandler}
            placeholder="Enter your username"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[3px] border-b-richblack-700"
          />
        </label>

        <label className="w-full relative">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Password<sup className="text-pink-200"> *</sup>
          </p>
          <input
            required
            placeholder="Enter your Password"
            type={showPass ? "text" : "password"}
            name="password"
            id="password"
            onChange={formChangeHandler}
            value={formData.password}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-[3px] border-b-richblack-700"
          />
          <span
            className="absolute right-3 top-[38px] cursor-pointer"
            onClick={() => {
              setShowPass(!showPass);
            }}
          >
            {showPass ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>

        <div className="container w-full grid place-content-center">
          {imgSrc ? (
            <img src={imgSrc} alt="webcam" />
          ) : (
            <Webcam height={380} width={380} ref={webcamRef} />
          )}
          <div className="btn-container">
            {imgSrc ? (
              <button
                type="button"
                onClick={retake}
                className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
              >
                Retake photo
              </button>
            ) : (
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={capture}
                  className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
                >
                  Capture photo
                </button>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
        >
          {formType === "login" ? "Login" : "Sign Up"}
        </button>
      </form>

      {formType === "login" ? (
        <div className="text-center my-6">
          Don&#39;t have an account?{" "}
          <Link to="/signup" className="text-yellow-50 hover:underline">
            Sign up
          </Link>
        </div>
      ) : (
        <div className="text-center my-6">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-50 hover:underline">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
