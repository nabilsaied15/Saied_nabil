"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Home from "@/components/home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      {/* Barre de navigation */}
      <Navbar />

      {/* Section Home */}
      <section id="home" className="py-20 bg-gray-900 text-white">
        <Home />
      </section>

      {/* Section About */}
      <section id="about" className="py-20 bg-gray-800 text-white">
        <About />
      </section>

      {/* Section Skills */}
      <section id="skills" className="py-20 bg-gray-700 text-white">
        <Skills />
      </section>

      {/* Section Projects */}
      <section id="projects" className="py-20 bg-gray-600 text-white">
        <Projects />
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-gray-500 text-white">
        <Contact />
      </section>

      {/* Footer global */}
      <Footer />
    </>
  );
};

export default Page;