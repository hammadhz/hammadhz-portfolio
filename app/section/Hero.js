"use client";
// Hero.js
import React from "react";
import developerImage from "../assets/img/dev.jpg"; // Make sure to replace this with the actual path to your image
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="bg-primary  py-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        {/* Left Side */}
        <motion.div className="lg:w-1/2 mb-12 lg:mb-0" variants={textVariants}>
          <h1 className="text-4xl font-extrabold mb-4 text-secondary font-poppins">
            Hi, this is Hammad
          </h1>
          <h2 className="text-2xl font-semibold mb-4 text-secondary font-poppins">
            Frontend Developer
          </h2>
          <p className="text-lg mb-6 text-secondary font-poppins font-semibold">
            I specialize in creating beautiful and functional user interfaces
            with a keen eye for detail. I enjoy turning complex problems into
            elegant solutions.
          </p>

          <a
            href="#contact"
            className="bg-accent font-poppins text-black py-2 px-6 rounded-lg text-lg font-bold hover:bg-accent/80 border border-b-[6px] border-b-tertiary"
          >
            Get in Touch
          </a>
          {/* <a
              href="#contact"
              className="bg-accent font-poppins text-black py-2 px-6 rounded-lg text-lg font-bold hover:bg-accent/80 border border-b-[6px] border-b-tertiary"
            >
              Download My Resume
            </a> */}
        </motion.div>
        {/* Right Side */}
        <motion.div className="lg:w-1/2" variants={imageVariants}>
          <Image
            src={developerImage}
            alt="Developer sitting"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
