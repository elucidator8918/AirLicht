import React from "react";
import HighlightText from "./common/HighlightText";

const Footer = () => {
  return (
    <div className="relative mx-auto flex max-w-[1080px] w-11/12 text-white justify-between mt-16 pb-4">
      <p className="text-center text-white py-2">
        &copy; 2021 All rights reserved
      </p>
      <div>
        <p className="text-center text-white py-2">
          Desinged & Developed by <HighlightText>Team AirLicht</HighlightText>
        </p>
      </div>
    </div>
  );
};

export default Footer;
