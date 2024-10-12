"use client";

// Projects.js
import React from "react";
import ProjectCard from "../components/ProjectCard";
import otz from "../assets/img/projects/otz.jpg";
import equrban from "../assets/img/projects/e-qurban.jpg";

const projects = [
  {
    title: "One Tranzact",
    description:
      "One Tranzact is an advanced loan application platform designed for One TranzactSdnBhd. It features a seamless EKYC process for identity verification through face and ID card recognition, tailored for the Malaysian market.",
    link: "https://frontend.onetranzact.com.my/",
    image: otz, // Replace with your project images
  },
  {
    title: "EQurban",
    description:
      "E-Qurban is a comprehensive qurban management application by MBP Solutions Sdn. Bhd., facilitating the purchase of cattle parts for qurbani in Malaysia. It integrates FWX M1 payment methods, offering installment plans, transaction details, and qurban history to enhance the ritual experience.",
    link: "https://e-qurban.com/",
    image: equrban, // Replace with your project images
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-secondary mb-12 font-poppins">
          My Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project?.title}
              description={project?.description}
              projectUrl={project?.link}
              imageUrl={project?.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

{
  /* <motion.div
              key={index}
              className="bg-[#ffffff] rounded-lg shadow-lg overflow-hidden max-w-sm"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-[#F59E0B] hover:underline"
                >
                  Learn More
                </a>
              </div>
            </motion.div> */
}
