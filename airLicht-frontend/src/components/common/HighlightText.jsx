import React from "react";

const HighlightText = (props) => {
  return (
    <span
      className={`font-bold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FF] to-[#A6FFCB] bg-clip-text text-transparent ${props.className}`}
    >
      {props.children}
    </span>
  );
};

export default HighlightText;
