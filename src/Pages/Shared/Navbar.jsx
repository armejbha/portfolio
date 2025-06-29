import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const activeNav = ({ isActive }) => {
    return `text-xl  bg-transparent hover:text-[#ffc107] ${
      isActive ? "text-[#ffc107]" : ""
    }`;
  };
  const navLinks = (
    <>
      <li>
        <NavLink className={activeNav} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={activeNav} to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className={activeNav} to="/skills">
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink className={activeNav} to="/projects">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink className={activeNav} to="/contact">
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="">
      <div className="navbar max-w-[1350px] mx-auto py-6">
        <div className="navbar-start">
          <a className="text-3xl font-bold">Abdur.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="px-4 py-2 border text-2xl rounded-lg hover:bg-white hover:text-black hover:cursor-pointer">
            Resume
          </a>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            ></ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
