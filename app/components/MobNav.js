"use client";
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the hamburger and close icons

const MobileNav = ({ isOpen, handleOpenSideBar }) => {
  const handleToggle = () => {
    handleOpenSideBar(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <button onClick={handleToggle} className="text-white p-4 md:hidden">
        <div className="bg-tertiary w-8 h-8 rounded-lg flex items-center justify-center">
          <FaBars className="w-6 h-6 text-black" />
        </div>
      </button>

      {/* Sidebar Navigation */}
      <div
        className={`fixed z-50 top-0 right-0 w-64 bg-primary h-full transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 md:relative md:flex md:flex-row md:space-x-6`}
      >
        <div className="size-8 bg-tertiary flex justify-center items-center m-5 rounded-lg">
          <FaTimes
            className="size-6 text-black"
            onClick={() => handleOpenSideBar(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-y-3 space-y-4 p-4 md:p-0 md:flex-row md:space-y-0 md:space-x-6">
          <li>
            <a
              href="#about"
              className="text-black hover:text-accent font-poppins py-2 px-10 rounded-lg bg-accent text-lg font-extrabold border border-b-[6px] border-b-tertiary "
              onClick={() => handleOpenSideBar(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className=" text-black hover:text-accent py-2 px-9 rounded-lg font-poppins bg-accent text-lg font-extrabold border border-b-[6px] border-b-tertiary "
              onClick={() => handleOpenSideBar(false)}
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-black hover:text-accent py-2 px-12 rounded-lg font-poppins text-lg bg-accent font-extrabold border border-b-[6px] border-b-tertiary "
              onClick={() => handleOpenSideBar(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-black hover:text-accent py-2 px-5 rounded-lg text-lg font-poppins bg-accent font-extrabold border border-b-[6px] border-b-tertiary "
              onClick={() => handleOpenSideBar(false)}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-black hover:text-accent py-2 px-5 rounded-lg text-lg font-poppins bg-accent font-extrabold border border-b-[6px] border-b-tertiary "
              onClick={() => handleOpenSideBar(false)}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
