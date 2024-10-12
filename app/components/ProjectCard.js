"use client";
// src/components/ProjectCard.js
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      className="w-10/12 h-full flex lg:flex-row md:flex-row flex-col justify-between bg-[#191919] border border-[#6E6E6E] rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-1 px-10 py-8  flex flex-col gap-4 lg:items-start md:items-start items-center">
        <h2 className="text-2xl font-bold  text-white font-poppins">{title}</h2>
        <p className="text-base text-gray-300 lg:w-10/12 md:w-full w-full mb-4 lg:text-start md:text-start text-center">
          {description}
        </p>
        <a
          href={projectUrl}
          target="_blank"
          className="inline-block bg-tertiary text-black px-4 py-2 rounded-3xl font-semibold font-poppins"
        >
          View Project
        </a>
      </div>
      <div className="p-3 flex-1 h-auto w-full md:w-1/2 lg:block md:block hidden">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
