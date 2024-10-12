"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Motion variants for animation
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="bg-primary py-20">
      <div className="container mx-auto">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <h2 className="text-4xl font-bold mb-4 text-accent font-poppins">
            Hi, this is Hammad
          </h2>
          <p className="text-2xl font-semibold mb-6 text-accent font-poppins">
            Nice to meet you!
          </p>
          <p className="text-lg  max-w-3xl mx-auto text-secondary font-poppins">
            I am a React.js and Next.js developer passionate about building
            dynamic and responsive web applications. With a keen eye for detail
            and a love for clean code, I turn ideas into elegant solutions.
            Whether it’s crafting interactive user interfaces or optimizing
            performance, I strive for excellence in every project I undertake.
            Let’s create something amazing together!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
