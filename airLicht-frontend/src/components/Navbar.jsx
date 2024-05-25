import React from "react";
import Logo from "../assets/airLicht-logo.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const [isSubNavOpened, setIsSubNavOpened] = useState(false);
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <>
      <div className="relative min-h-16 border-b-[1px] text-richblack-50 border-richblack-700 flex items-center justify-center bg-richblack-800 transition-all duration-200">
        <div className="w-11/12 max-w-maxContent flex justify-between items-center flex-col lg:flex-row">
          <div className="flex justify-between items-center w-full">
            <div>
              <Link to={"/"}>
                <img
                  src={Logo}
                  alt="airLicht-logo"
                  loading="lazy"
                  width={140}
                  
                />
              </Link>
            </div>

            <div className="hidden lg:flex">
              <ul className="flex gap-x-6">
                <li
                  className={`hover:text-yellow-50 ${
                    matchRoute("/") ? "text-yellow-50" : ""
                  }`}
                >
                  <Link to={"/"}>Home</Link>
                </li>
                <li
                  className={`hover:text-yellow-50 ${
                    matchRoute("/about") ? "text-yellow-50" : ""
                  }`}
                >
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li
                  className={`hover:text-yellow-50 ${
                    matchRoute("/faqs") ? "text-yellow-50" : ""
                  }`}
                >
                  <Link to={"/faqs"}>FAQs</Link>
                </li>
              </ul>
            </div>

            {!token ? (
              <div className="hidden lg:flex gap-5 justify-center items-center">
                <Link to={"/login"}>
                  <button className="bg-richblack-800 px-4 py-2 rounded-lg border-[1px] border-richblack-600 hover:bg-richblack-900">
                    Login
                  </button>
                </Link>
                <Link to={"/signup"}>
                  <button className="bg-richblack-800 px-4 py-2 rounded-lg border-[1px] border-richblack-600 hover:bg-richblack-900">
                    Sign up
                  </button>
                </Link>
              </div>
            ) : (
              <div className="hidden lg:flex gap-5 justify-center items-center">
                <Link to={"/dashboard"}>
                  <button className="bg-richblack-800 px-4 py-2 rounded-lg border-[1px] border-richblack-600 hover:bg-richblack-900">
                    Dashboard
                  </button>
                </Link>
              </div>
            )}

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
        <div className="fixed top-16 left-0 right-0 border-b-[1px] z-10 text-richblack-50 border-richblack-700 flex items-center justify-center bg-richblack-800 transition-all duration-200 lg:hidden">
          <ul className="w-full flex flex-col items-center text-richblack-50">
            <li
              className={`bg-richblack-700 w-full text-center p-2 hover:text-yellow-50 ${
                matchRoute("/") ? "text-yellow-50" : ""
              }`}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={`bg-richblack-700 w-full text-center p-2 hover:text-yellow-50 ${
                matchRoute("/about") ? "text-yellow-50" : ""
              }`}
            >
              <Link to={"/about"}>About Us</Link>
            </li>
            <li
              className={`bg-richblack-700 w-full text-center p-2 hover:text-yellow-50 ${
                matchRoute("/faqs") ? "text-yellow-50" : ""
              }`}
            >
              <Link to={"/faqs"}>FAQs</Link>
            </li>
            {!token ? (
              <>
                <li
                  className={`bg-richblack-700 w-full text-center p-2 hover:text-yellow-50 ${
                    matchRoute("/login") ? "text-yellow-50" : ""
                  }`}
                >
                  <Link to={"/login"}>Login</Link>
                </li>
                <li
                  className={`bg-richblack-700 w-full text-center p-2 hover:text-yellow-50 ${
                    matchRoute("/signup") ? "text-yellow-50" : ""
                  }`}
                >
                  <Link to={"/signup"}>Sign up</Link>
                </li>
              </>
            ) : (
              <li
                className={`bg-richblack-700 w-full text-center p-2 hover:text-yellow-50 ${
                  matchRoute("/dashboard") ? "text-yellow-50" : ""
                }`}
              >
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
