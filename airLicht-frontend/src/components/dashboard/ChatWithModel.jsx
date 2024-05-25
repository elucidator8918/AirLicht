import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Upload from "./Upload";
import { useForm } from "react-hook-form";
import { provideReco } from "../../services/operations/modelAPI";
import { useDispatch, useSelector } from "react-redux";

function ChatWithModel() {
  const { token } = useSelector((state) => state.auth);
const [rec, setRec] = useState(null);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm();

  const doOnSubmit = async(data) => {
    // const blob = new Blob([data.imageData], { type: data.imageData.type });
    console.log(data.imageData);
      const formData = new FormData();
      formData.append("img", data.imageData);

      console.log(formData.get("img"));
      setRec("Loading...");
      const res = await provideReco(formData);
      console.log(res);
      setRec(res);
  };

  return (
    <>
      <div className="text-richblack-5 mb-3">
        <TypeAnimation
          sequence={[
            "Repair Recommendations",
            1000,
            "Faulty Wire Location Identification",
            1000,
            "Damage Assessment",
            1000,
            "Image Analysis",
            1000,
          ]}
          className="text-2xl font-bold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FF] to-[#A6FFCB] bg-clip-text text-transparent"
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full h-[calc(100vh-180px)] bg-richblack-800 text-richblack-50 p-4 overflow-y-scroll custom-scrollbar">
          <form onSubmit={handleSubmit(doOnSubmit)} className="z-10">
            <Upload
              name="imageData"
              label="Upload Image"
              register={register}
              setValue={setValue}
              errors={errors}
            />
            {/* <input type="file"
              {...register("imageData", { required: true })}
              className="bg-richblack-700 rounded-lg text-richblack-50 w-full p-4"
             /> */}
            <div className="flex justify-between w-full mt-4 gap-4">
              <button
                type="submit"
                className="bg-richblack-700 hover:bg-richblack-600 rounded-lg text-richblack-50 w-1/4 p-4 grid place-content-center"
              >
                Repair Recommendations
              </button>

              <button
                type="submit"
                className="bg-richblack-700 hover:bg-richblack-600 rounded-lg text-richblack-50 w-1/4 p-4 text-center grid place-content-center"
              >
                Image Analysis
              </button>
            </div>
          </form>

          <div>
            {/* write recomndation here like chatgpt */}
            <div className="mt-8">
              <div className="text-xl font-semibold">Recommendations:</div>
              <div className="bg-richblack-700 p-4 mt-4 rounded-lg">
                <p className="text-richblack-50">
                  {rec ?rec : "No recommendations yet"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatWithModel;
