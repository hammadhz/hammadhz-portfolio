"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  const [open, setOpen] = useState(false);
  const links = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-background/80 backdrop-blur-md shadow-sm border-b border-border">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <a
          href="#home"
          className="text-xl md:text-2xl font-bold text-foreground"
        >
          Hammad.dev
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden md:block">
            <ul className="flex gap-6 items-center">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-primary transition-colors text-sm lg:text-base"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col p-4 gap-3">
            {links.map((link) => (
              <li key={link}>
                <Link
                  href={`#${link.toLowerCase()}`}
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
