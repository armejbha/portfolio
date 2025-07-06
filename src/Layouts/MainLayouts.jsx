import React from "react";
import Navbar from "../Pages/Shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../Pages/Shared/Footer";

const MainLayouts = () => {
  return (
    <div className="jost">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;

// bg-[#F2F2F2]
// text-[#8A8C8E]
