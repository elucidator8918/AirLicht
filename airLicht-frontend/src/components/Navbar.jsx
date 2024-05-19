import React from "react";
import Logo from "../assets/airLicht-logo.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [isSubNavOpened, setIsSubNavOpened] = useState(false);
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <>
      <div className="relative min-h-16 border-b-[1px] text-richblack-50 border-richblack-700 flex items-center justify-center bg-richblack-800 transition-all duration-200">
        <div className="color-round-grad absolute left-0 top-0 w-[60%] h-[60%]"></div>
        <div className="color-round-grad1 absolute right-0 -bottom-20 w-[60%] h-[60%]"></div>
        <div className="w-11/12 z-10 max-w-maxContent flex justify-between items-center flex-col">
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
                <li
                  className={`hover:text-blue-100 ${
                    matchRoute("/") ? "text-blue-100" : ""
                  }`}
                >
                  <Link to={"/"}>Home</Link>
                </li>
                <li
                  className={`hover:text-blue-100 ${
                    matchRoute("/about") ? "text-blue-100" : ""
                  }`}
                >
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li
                  className={`hover:text-blue-100 ${
                    matchRoute("/faqs") ? "text-blue-100" : ""
                  }`}
                >
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
        <div className="border-b-[1px] z-10 text-richblack-50 border-richblack-700 flex items-center justify-center bg-richblack-800 transition-all duration-200 lg:hidden">
          <ul className="w-full flex flex-col items-center text-richblack-50">
            <li
              className={`bg-richblack-700 w-full text-center p-2 hover:text-blue-100 ${
                matchRoute("/") ? "text-blue-100" : ""
              }`}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={`bg-richblack-700 w-full text-center p-2 hover:text-blue-100 ${
                matchRoute("/about") ? "text-blue-100" : ""
              }`}
            >
              <Link to={"/about"}>About Us</Link>
            </li>
            <li
              className={`bg-richblack-700 w-full text-center p-2 hover:text-blue-100 ${
                matchRoute("/faqs") ? "text-blue-100" : ""
              }`}
            >
              <Link to={"/faqs"}>FAQs</Link>
            </li>
            <li
              className={`bg-richblack-700 w-full text-center p-2 hover:text-blue-100 ${
                matchRoute("/login") ? "text-blue-100" : ""
              }`}
            >
              <Link to={"/login"}>Login</Link>
            </li>
            <li
              className={`bg-richblack-700 w-full text-center p-2 hover:text-blue-100 ${
                matchRoute("/signup") ? "text-blue-100" : ""
              }`}
            >
              <Link to={"/signup"}>Sign Up</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
