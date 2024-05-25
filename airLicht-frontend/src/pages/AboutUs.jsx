import React from "react";
import HighlightText from "../components/common/HighlightText";
import Footer from "../components/Footer";
import { TypeAnimation } from "react-type-animation";

const AboutUs = () => {
  return (
    <>
      {/* Section 1 */}
      <div className="relative min-h-[calc(100vh-180px)] mx-auto flex flex-col max-w-maxContent w-11/12 items-center text-white justify-center">
        <div className="flex flex-col justify-center items-center md:flex-row gap-8">
          <div className="md:w-[100%] flex flex-col gap-4">
            <p className="text-[40px] font-bold text-richblack-25 mt-5">
              <HighlightText>
              <TypeAnimation
                  sequence={["About AirLicht", 1000, ""]}
                  speed={10}
                  cursor={true}
                  repeat={Infinity}
                  omitDeletionAnimation={true}
                />
                </HighlightText>
            </p>
            <p className="text-richblack-25 text-[18px]" align="justify">
              We are Team AirLicht, dedicated to revolutionizing the aviation industry through cutting-edge technology. Our mission is to enhance aircraft maintenance and repair processes, ensuring the highest standards of safety, reliability, and efficiency.
            </p>
            <p className="text-richblack-25 text-[18px]" align="justify">
              Our team comprises experts in aerospace engineering, data science, and software development. With a passion for innovation and a commitment to excellence, we strive to deliver solutions that address the critical needs of the aviation industry.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="relative mx-auto flex flex-col max-w-maxContent w-11/12 items-center text-white justify-center mt-5 mb-10">
        <p className="text-[40px] font-bold text-richblack-25 mb-4">
          <HighlightText>Our Vision</HighlightText>
        </p>
        <div className="relative grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
          <div className="color-round-grad1 opacity-20 absolute top-0 left-0 w-[60%] h-[60%]"></div>
          <div className="flex flex-col gap-4 bg-richblack-300 bg-opacity-30 p-4 rounded-md">
            <p className="text-[22px] font-bold text-richblack-5">
              Safety First
            </p>
            <p className="text-[18px] text-richblack-25">
              Ensuring the utmost safety for passengers, crew, and aircraft is our top priority. Our innovative solutions aim to detect and address potential issues before they pose a risk.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-richblack-300 bg-opacity-30 p-4 rounded-md">
            <p className="text-[22px] font-bold text-richblack-5">
              Technological Innovation
            </p>
            <p className="text-[18px] text-richblack-25">
              We leverage the latest advancements in AI, machine learning, and imaging technologies to create tools that transform aircraft maintenance and repair.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-richblack-300 bg-opacity-30 p-4 rounded-md">
            <p className="text-[22px] font-bold text-richblack-5">
              Operational Excellence
            </p>
            <p className="text-[18px] text-richblack-25">
              Our goal is to streamline maintenance processes, reducing downtime and costs while maintaining the highest levels of quality and compliance.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-richblack-300 bg-opacity-30 p-4 rounded-md">
            <p className="text-[22px] font-bold text-richblack-5">
              Industry Collaboration
            </p>
            <p className="text-[18px] text-richblack-25">
              We collaborate with industry leaders, regulatory bodies, and academic institutions to stay at the forefront of technological advancements and best practices.
            </p>
          </div>
          <div className="color-round-grad1 opacity-60 absolute right-0 -bottom-20 w-[60%] h-[60%]"></div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto flex flex-col max-w-maxContent w-11/12 items-center text-white justify-center mt-10 mb-5">
        <p className="text-[40px] font-bold text-richblack-25 mb-4">
          <HighlightText>Meet Our Team</HighlightText>
        </p>
        <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 grid-flow-row gap-4 mt-2">
          <div className="color-round-grad opacity-20 absolute top-0 left-0 w-[60%] h-[60%]"></div>
          {/* Example team member */}
          <div className="flex flex-col gap-4 bg-richblack-300 z-10 bg-opacity-30 p-4 rounded-md">
            <p className="text-[22px] font-bold text-richblack-5">Siddhant Dutta</p>
            <p className="text-[18px] text-richblack-25">BE, Computer Engineering</p>
            <p className="text-[16px] text-richblack-50">
              A 3rd year ML developer with over 3 years of experience in ML and backend.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-richblack-300 z-10 bg-opacity-30 p-4 rounded-md">
            <p className="text-[22px] font-bold text-richblack-5">Gagan Srivastava</p>
            <p className="text-[18px] text-richblack-25">B.Tech, Computer Science</p>
            <p className="text-[16px] text-richblack-50">
              A 4th year specializing in machine learning and data analysis.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-richblack-300 z-10 bg-opacity-30 p-4 rounded-md">
            <p className="text-[22px] font-bold text-richblack-5">Hemant Patil</p>
            <p className="text-[18px] text-richblack-25">B.Tech, Computer Engineering</p>
            <p className="text-[16px] text-richblack-50">
              A 4th year web developer, responsible for creating the user interface.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-richblack-300 z-10 bg-opacity-30 p-4 rounded-md">
            <p className="text-[22px] font-bold text-richblack-5">Saloni Stuti</p>
            <p className="text-[18px] text-richblack-25">B.Tech, Computer Science</p>
            <p className="text-[16px] text-richblack-50">
              A 3rd year frontend developer, also specializing in AR.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-richblack-300 z-10 bg-opacity-30 p-4 rounded-md">
            <p className="text-[22px] font-bold text-richblack-5">Tushar Chaudhary</p>
            <p className="text-[18px] text-richblack-25">B.Tech, Computer Science</p>
            <p className="text-[16px] text-richblack-50">
            A 4th year web developer, responsible for streamlining user processes.
            </p>
          </div>
          <div className="color-round-grad opacity-50 absolute right-0 -bottom-20 w-[60%] h-[60%]"></div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutUs;
