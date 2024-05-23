import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import Webcam from "react-webcam";
import { useCallback, useRef } from "react";

const Login = () => {
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
    image: imgSrc,
  });

  const [showPass, setShowPass] = useState(false);

  const formChangeHandler = (e) => {
    // const [name, value] = e.target;

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

    if (!imgSrc) {
      toast.error("Please wait image is getting captured!");
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      image: imgSrc,
    }));

    if (!formData.image) {
      toast.error("Please capture image!");
      return;
    }

    dispatch(login(formData, navigate));
  };

  return (
    <div className="relative mx-auto flex flex-col max-w-maxContent w-11/12 items-center text-white justify-between md:justify-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-y-4 mt-10 w-full md:w-[450px]"
      >
        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Username<sup className="text-pink-200"> *</sup>
          </p>
          <input
            required
            type="text"
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

        <div className="container">
          {imgSrc ? (
            <img src={imgSrc} alt="webcam" />
          ) : (
            <Webcam height={500} width={500} ref={webcamRef} />
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
              <button
                type="button"
                onClick={capture}
                className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
              >
                Capture photo
              </button>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
