import React from "react";
import App from "../App_1"
import { TypeAnimation } from "react-type-animation";

const APS_ACCESS_TOKEN = import.meta.env.VITE_APS_ACCESS_TOKEN;
const APS_MODEL_URN = import.meta.env.VITE_APS_MODEL_URN;

const History = () => {
  return (
      <div>
          <div className="text-richblack-5 mb-3">
          <TypeAnimation
                  sequence={["CAD Analysis", 1000, ""]}
                  className="text-2xl font-bold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FF] to-[#A6FFCB] bg-clip-text text-transparent"
                  speed={10}
                  cursor={true}
                  repeat={Infinity}
                  omitDeletionAnimation={true}
                />
          </div>
          <App token={APS_ACCESS_TOKEN} urn={APS_MODEL_URN} />
      </div>
  );
};

export default History;
