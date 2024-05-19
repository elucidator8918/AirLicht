import React from "react";
import Logo from "../assets/airLicht-logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [isSubNavOpened, setIsSubNavOpened] = useState(false);

  return (
    <div className="transition-all duration-200">
      <div className="min-h-16 border-b-[1px] text-richblack-50 border-richblack-700 flex items-center justify-center bg-richblack-800 transition-all duration-200">
        <div className="w-11/12 max-w-maxContent flex justify-between items-center flex-col">
          <div className="flex justify-between items-center w-full">
            <div>
              <Link to={"/"}>
                <img
                  src={Logo}
                  alt="airLicht-logo"
                  loading="lazy"
                  width={120}
                />
              </Link>
            </div>

            <div className="hidden lg:flex">
              <ul className="flex gap-x-6">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/faqs"}>FAQs</Link>
                </li>
              </ul>
            </div>

            <div className="hidden lg:flex gap-5 justify-center items-center">
              <Link to={"/login"}>
                <button className="bg-richblack-800 px-4 py-2 rounded-lg border-[1px] border-richblack-600 hover:bg-richblack-900">
                  Log in
                </button>
              </Link>

              <Link to={"/signup"}>
                <button className="bg-richblack-800 px-4 py-2 rounded-lg border-[1px] border-richblack-600 hover:bg-richblack-900">
                  Sign up
                </button>
              </Link>
            </div>

            <button
              onClick={() => setIsSubNavOpened(!isSubNavOpened)}
              className="flex lg:hidden text-[1.6rem]"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
      {isSubNavOpened && (
        <div className="border-b-[1px] text-richblack-50 border-richblack-700 flex items-center justify-center bg-richblack-800 transition-all duration-200">
          <ul className="w-full flex flex-col items-center text-richblack-50">
            <li className="bg-richblack-700 w-full text-center py-2">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="bg-richblack-700 w-full text-center py-2">
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className="bg-richblack-700 w-full text-center py-2">
              <Link to={"/faqs"}>FAQs</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
