import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import SidebarLink from "./SidebarLink";
import { sidebarLinks } from "../../data/sidebar-links";
import { VscSignOut } from "react-icons/vsc";
import { logout } from "../../services/operations/authAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../ConfimationModal";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModal, setConfirmationModal] = useState(null);
  const [leftOpen, setLeftOpen] = useState(false);

  return (
    <div className="transition-all duration-200">
      <button
        onClick={() => setLeftOpen(!leftOpen)}
        className="lg:hidden absolute top-0 left-0 text-richblack-200 font-semibold 
      bg-richblack-800 px-4 py-2 z-[1000]"
      >
        {leftOpen ? <FaArrowLeftLong /> : <FaArrowRightLong />}
      </button>

      <div
        className={`w-[222px] min-h-[calc(100vh-4.2rem)] flex-col border-r-[1px] border-r-richblack-700 
      text-richblack-200 font-semibold bg-richblack-800 py-10 z-10 absolute
      ${leftOpen ? "flex" : "hidden"} lg:flex lg:relative
      `}
      >
        <div className="flex flex-col">
          {sidebarLinks.map((link, index) => {
            return (
              <SidebarLink
                key={link.id + index}
                link={link}
                iconName={link.icon}
              />
            );
          })}
        </div>

        <div className="mx-auto mt-6 mb-6 h-[1px] w-11/12 bg-richblack-600"></div>

        <div className="flex flex-col">
          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your Account",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
          >
            <div className="flex items-center gap-x-2 px-8 py-2 text-base font-medium">
              <VscSignOut className="text-lg" />
              Logout
            </div>
          </button>
        </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};

export default Sidebar;
