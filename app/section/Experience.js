"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "ReactJS Developer",
    company: "Pukat Digital Pvt Ltd.",
    startDate: "Feb 2023",
    endDate: "Present",
    techStack: ["React.js", "Tailwind CSS", "Next.js", "Bootstrap"],
    description: {
      desc: "As a React.js Developer, I was responsible for designing and developing dynamic, user-friendly web applications. My role involved:",
      list: [
        "Frontend Development: Building and maintaining high-performance web applications using React.js. Implemented responsive designs and ensured cross-browser compatibility.",
        "Component Design: Created reusable and modular UI components, ensuring consistency and efficiency across the application.",
        "Collaboration: Worked closely with UX/UI designers and backend developers to integrate APIs and deliver a seamless user experience. Participated in regular sprint meetings and contributed to project planning and execution.",
        "Version Control: Managed version control and collaboration using Git and GitHub, ensuring smooth integration and deployment processes.",
      ],
    },
  },
  {
    title: "MERN Stack Intern",
    company: "Cybil Tech.",
    startDate: "Aug 2022",
    endDate: "Feb 2023",
    techStack: ["Next.js", "DatoCMS", "Tailwind CSS", "Typescript", "React.js"],
    description: {
      desc: "As a MERN Stack Intern, My role was to craft and optimiz end-to-end web applications, blending frontend and backend expertise to deliver seamless, high-impact user experiences.",
      list: [
        "API Integration: Developed and integrated RESTful APIs and GraphQL queries with DatoCMS, streamlining data exchange and backend interactions.",
        "Frontend Development: Designed and implemented engaging user interfaces with a focus on responsiveness and seamless user interactions, enhancing the overall application experience.",
        "Backend Development: Built and optimized server-side functionalities and APIs, ensuring reliable data handling and robust application performance.",
      ],
    },
  },
];

const Experience = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="bg-primary py-20">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-secondary mb-12 font-poppins"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          My Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto px-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="hover:bg-tertiary text-white parentCardExp lg:p-6 p-1 mb-8 rounded-lg shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
            >
              <div className="flex lg:justify-between lg:flex-row flex-col  gap-5">
                <div className="lg:text-sm text-base text-white mb-4 lg:w-[33%] w-full font-poppins mt-[2px]">
                  {exp.startDate} - {exp.endDate}
                </div>
                <div className="lg:w-[77%] w-full">
                  <div className="text-xl font-bold mb-2 lg:text-start text-center flex-1 font-poppins">
                    {exp.title}
                  </div>
                  <div className="text-lg font-medium mb-1 lg:text-start text-center font-poppins">
                    {exp.company}
                  </div>
                  <div className="mb-4 text-base font-regular lg:text-start text-center font-poppins flex flex-col">
                    <span className="pb-2">{exp.description.desc}</span>
                    <ul className=" text-base font-regular text-start list-disc ml-4 space-y-2">
                      {exp.description.list?.map((list, index) => {
                        return (
                          <li key={index} className="text-white">
                            {list}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 ">
                    {exp.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-tertiary childExpTags font-poppins text-base text-white px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
