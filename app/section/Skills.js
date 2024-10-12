"use client";

import React from "react";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import IconCard from "../components/IconCard";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";

const icons = [
  RiJavascriptLine,
  FaReact,
  SiRedux,
  RiNextjsFill,
  RiTailwindCssFill,
  FaCss3Alt,
  FaNodeJs,
  SiMongodb,
  FaBootstrap,
  SiExpress,
  // Add more image paths as needed
];

const Skills = () => {
  return (
    <section id="skills" className="bg-accent w-full">
      <div className="container h-auto   py-10 ">
        <h2 className="text-4xl font-bold text-black text-center mb-12 font-poppins">
          My Skills
        </h2>
        <div className="flex items-center justify-center flex-wrap gap-6 w-3/4 mx-auto">
          {icons?.map((icon, index) => {
            return <IconCard key={index} Icon={icon} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
