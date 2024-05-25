import React from "react";
import HighlightText from "../components/common/HighlightText";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";

const FAQs = () => {
  const faqList = [
    {
      question: "What is AirLicht?",
      answer:
        "AirLicht is a project aimed at enhancing aircraft maintenance processes using advanced imaging, analysis, and machine learning techniques to detect and assess damage on aircraft surfaces and identify faulty wiring."
    },
    {
      question: "How does AirLicht enhance safety?",
      answer:
        "AirLicht enhances safety by providing thorough assessments and repairs that maintain the airworthiness of aircraft, detecting and addressing potential issues before they pose a risk to passengers, crew, and the aircraft itself."
    },
    {
      question: "What technologies does AirLicht use?",
      answer:
        "AirLicht utilizes a combination of advanced imaging, machine learning algorithms, signal processing techniques, and CAD 3D modeling to accurately detect damage and identify faulty wires in aircraft."
    },
    {
      question: "Who can benefit from AirLicht's solutions?",
      answer:
        "AirLicht's solutions are beneficial for aircraft maintenance teams, airlines, aviation regulatory bodies, and any organization involved in aircraft safety and maintenance operations."
    },
    {
      question: "How can I get in touch with the AirLicht team?",
      answer:
        "You can get in touch with the AirLicht team through our contact page on the website or by sending an email to contact@airlicht.com."
    }
  ];

  return (
    <>
      {/* Section 1 */}
      <div className="relative min-h-[calc(100vh-240px)] mx-auto flex flex-col max-w-maxContent w-11/12 items-center text-white justify-center mt-5">
        <div className="flex flex-col justify-center items-center md:flex-row gap-8">
          <div className="md:w-[100%] flex flex-col gap-4">
            <p className="text-[40px] font-bold text-richblack-25 mt-0">
              <HighlightText>
                <TypeAnimation
                  sequence={["Frequently Asked Questions", 1000, ""]}
                  speed={10}
                  cursor={true}
                  repeat={Infinity}
                  omitDeletionAnimation={true}
                />
              </HighlightText>
            </p>
            <p className="text-richblack-25 text-[18px] mb-2">
              Here are some of the most common questions we receive about our project and its capabilities. If you have any other questions, feel free to reach out to us.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="relative mx-auto flex flex-col max-w-maxContent w-11/12 items-center text-white justify-center mt-0 mb-10">
        <div className="relative grid grid-cols-1 gap-4 mt-0.1">
          <div className="color-round-grad1 opacity-20 absolute top-0 left-0 w-[60%] h-[60%]"></div>
          {faqList.map((faq, index) => (
            <div key={index} className="flex flex-col gap-4 bg-richblack-300 bg-opacity-30 p-4 rounded-md">
              <p className="text-[22px] font-bold text-richblack-5">
                {faq.question}
              </p>
              <p className="text-[18px] text-richblack-25">
                {faq.answer}
              </p>
            </div>
          ))}
          <div className="color-round-grad1 opacity-60 absolute right-0 -bottom-20 w-[60%] h-[60%]"></div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default FAQs;
