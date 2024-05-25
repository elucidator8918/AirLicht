import React from "react";
import HighlightText from "./common/HighlightText";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative mx-auto flex flex-col items-center max-w-[1080px] w-11/12 text-white mt-16 pb-4">
      <div className="w-full flex flex-col md:flex-row justify-between items-center py-4 border-t border-richblack-700">
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <Link to="/" className="hover:text-yellow-50">Home</Link>
          <Link to="/about" className="hover:text-yellow-50">About Us</Link>
          <Link to="/faqs" className="hover:text-yellow-50">FAQs</Link>
          <Link to="/contact" className="hover:text-yellow-50">Contact</Link>
        </div>

        {/* Contact Info */}
        {/* <div className="flex flex-col text-center mt-4 md:mt-0">
          <p className="text-sm">123 Aviation Way, Suite 100</p>
          <p className="text-sm">Aviation City, AV 12345</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div> */}

        {/* Social Media Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://facebook.com" className="text-richblack-200 hover:text-yellow-50" aria-label="Facebook">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" className="text-richblack-200 hover:text-yellow-50" aria-label="Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="https://linkedin.com" className="text-richblack-200 hover:text-yellow-50" aria-label="LinkedIn">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://instagram.com" className="text-richblack-200 hover:text-yellow-50" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      {/* Copyright and Developer Credit */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm py-2">
        <p className="text-center md:text-left">&copy; 2024 All rights reserved</p>
        <p className="text-center md:text-right">
          Designed & Developed by <HighlightText>Team AirLicht</HighlightText>
        </p>
      </div>
    </div>
  );
};

export default Footer;

