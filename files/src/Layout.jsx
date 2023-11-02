import React from "react";
import Sidebar from "./component/Left/SideBar"
import RightNav from "./component/Right/RightNav"
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <div className="flex mx-0 relative w-full h-full z-20">
        <Sidebar />
        <Outlet />
        <RightNav />
      </div>
    </>
  );
};

export default Layout;
