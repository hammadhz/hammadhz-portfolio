"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden w-full"
    >
      {/* Background gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" /> */}

      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-pulse" />
      </div> */}
      {/* <AnimatedBackground /> */}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mt-16 mx-auto">
        {/* Greeting */}
        <div className="animate-fade-in-up mt-10 md:mt-16 my-2">
          <span className="text-lg md:text-xl text-muted-foreground font-medium">
            Hello, I&apos;m
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up animation-delay-200">
          <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Hammad Azam
          </span>
        </h1>

        {/* Title */}
        <div className="animate-fade-in-up animation-delay-400 mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Frontend Developer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, responsive, and performant web experiences using
            modern technologies like React, Next.js, and TypeScript.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-600">
          <Button size="lg" className="px-8 py-3 text-lg font-semibold" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-lg font-semibold"
            asChild
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center items-center mb-8 animate-fade-in-up animation-delay-800">
          <Link
            href="https://github.com/hammadhz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://linkedin.com/in/hammadhz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <a
            href="mailto:hammadazmrauf@gmail.com"
            className="p-3 rounded-full bg-card hover:bg-accent transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <a
            href="#about"
            className="inline-flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
