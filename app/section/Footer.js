"use client";

// Footer.js
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../assets/svg/logo.svg";
import Image from "next/image";
const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.footer
      className="bg-accent py-10  w-full"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <Image src={logo} alt="logo" height={50} width={200} />
            <ul className="flex flex-col md:flex-row md:space-x-8">
              <li>
                <a href="#about" className="font-semibold text-lg font-poppins">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="font-semibold text-lg font-poppins"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="font-semibold text-lg font-poppins"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="font-semibold text-lg font-poppins"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-semibold text-lg font-poppins"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://linkedin.com/in/hammadhz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black "
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/hammadhz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black "
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="text-center mt-6">
          <p className="text-lg font-bold text-black font-poppins">
            &copy; {new Date().getFullYear()} Hammad. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
