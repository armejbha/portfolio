import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const activeNav = ({ isActive }) => {
    return `text-xl  bg-transparent hover:text-[#ffc107] ${
      isActive ? "text-[#ffc107]" : ""
    }`;
  };
  const navLinks = (
    <>
      <li>
        <Link
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          className="text-xl bg-transparent hover:text-[#ffc107] cursor-pointer"
          activeClass="text-[#ffc107]"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          className="text-xl bg-transparent hover:text-[#ffc107] cursor-pointer"
          activeClass="text-[#ffc107]"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          className="text-xl bg-transparent hover:text-[#ffc107] cursor-pointer"
          activeClass="text-[#ffc107]"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          className="text-xl bg-transparent hover:text-[#ffc107] cursor-pointer"
          activeClass="text-[#ffc107]"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          className="text-xl bg-transparent hover:text-[#ffc107] cursor-pointer"
          activeClass="text-[#ffc107]"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 bg-[#F2F2F2] z-20">
      <div className="flex justify-between items-center max-w-[1300px] mx-auto py-2">
        <div className="navbar-start">
          <a className="text-3xl font-bold">Abdur.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="px-6 py-2 border border-[#8A8C8E]   text-2xl rounded-xl hover:bg-gray-200 hover:cursor-pointer">
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
            >
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
