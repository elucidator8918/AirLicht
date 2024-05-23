import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-[calc(100vh-4.2rem)] flex relative">
      <Sidebar />
      <div className="h-[calc(100vh-4.2rem)] mx-auto w-11/12 max-w-maxContent text-richblack-300 overflow-y-hidden">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
