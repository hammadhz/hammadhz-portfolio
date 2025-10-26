"use client";
import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => (
  <footer className="relative mt-20 border-t border-border/50 bg-gradient-to-t from-background via-background/95 to-background/90 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Hammad Azam</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Frontend Developer passionate about creating beautiful, functional,
            and user-friendly web experiences.
          </p>
          <div className="flex gap-3">
            <Link
              href="https://github.com/hammadhz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card hover:bg-accent hover:scale-105 transition-all duration-200 border border-border/50"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://linkedin.com/in/hammadhz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card hover:bg-accent hover:scale-105 transition-all duration-200 border border-border/50"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="mailto:hammad@example.com"
              className="p-2 rounded-lg bg-card hover:bg-accent hover:scale-105 transition-all duration-200 border border-border/50"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
          <div className="space-y-2">
            <a
              href="#about"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#skills"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "MongoDB",
            ].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pt-6 border-t border-border/30">
        <div className="flex flex-row justify-center items-center gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Hammad Azam. Built with
            <Heart className="h-3 w-3 text-red-500 mx-1" />
            using Next.js & shadcn/ui
          </p>
         
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
