"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-gray-950 font-poppins ${scrolled ? "shadow-lg" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-white font-poppins tracking-wide">
              SNANI Nabil
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="nav__link">Accueil</a>
              <a href="#about" className="nav__link">À propos</a>
              <a href="#projects" className="nav__link">Projets</a>
              <a href="#skills" className="nav__link">Compétences</a>
              <a href="#contact" className="nav__link">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;