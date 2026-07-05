import React, { useState } from "react";
import ShaderBackground from "./components/ShaderBackground";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export default function App() {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 90;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen text-stone-800 font-sans antialiased bg-background selection:bg-pastel-red selection:text-pastel-red-dark">
      
      {/* Dynamic Warm Pastel Shader Background */}
      <ShaderBackground />

      {/* Floating Island Navigation bar */}
      <Navbar />

      {/* Core Layout container with rhythmic vertical spacing */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 space-y-24 md:space-y-36">
        
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-[75vh] flex flex-col justify-center items-center text-center relative scroll-mt-24"
        >
          {/* Subtle Halos for Warm Lighting */}
          <div className="absolute w-[350px] h-[350px] rounded-full bg-pastel-yellow/30 blur-[110px] pointer-events-none -z-10" />
          <div className="absolute w-[250px] h-[250px] rounded-full bg-pastel-red/20 blur-[90px] pointer-events-none -z-10 translate-x-16 translate-y-12" />
          <div className="absolute w-[300px] h-[300px] rounded-full bg-pastel-blue/20 blur-[100px] pointer-events-none -z-10 -translate-x-16 -translate-y-8" />

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-stone-900 tracking-tight leading-none mb-6">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-red-dark via-stone-800 to-pastel-blue-dark">
              Satyaki Mukherjee.
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-bold text-stone-700 max-w-3xl mb-4 leading-tight">
            First-Year BCA Student | Learning to Build Cool Things.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-stone-600 max-w-2xl mx-auto mb-10 font-sans leading-relaxed opacity-90">
            I love turning ideas into reality by building clean, creative, and functional web applications. Currently diving deep into Data Structures and Algorithms (DSA) to build a strong foundation in problem-solving.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <button
              onClick={(e) => handleScrollTo(e, "projects")}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-pastel-red border border-pastel-red-border text-pastel-red-dark text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer btn-glow-primary shadow-sm"
            >
              View My Work
            </button>
            
            <button
              onClick={(e) => handleScrollTo(e, "contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-xs font-bold uppercase tracking-wider text-stone-800 hover:bg-stone-50 transition-all duration-300 cursor-pointer shadow-sm border-stone-200"
            >
              Say Hello
            </button>
          </div>

          {/* Indicator loop scroll hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 animate-bounce">
            <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-bold">
              SCROLL DOWN
            </span>
            <ArrowDown className="w-4 h-4 text-stone-400" />
          </div>
        </section>

        {/* Bento Box Biography */}
        <About />

        {/* Technical Arsenal Category Panels */}
        <Skills />

        {/* Filtered Works Board */}
        <Projects />

        {/* Hackathons & Highlights Timeline */}
        <Achievements />

        {/* Communication Desk */}
        <Contact />

      </main>

      {/* Global Footer component */}
      <footer className="bg-stone-100 border-t border-stone-200 pt-16 pb-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Brand Left */}
          <div className="text-center md:text-left space-y-1">
            <span className="text-lg font-extrabold text-stone-900 tracking-tight">
              Satyaki Mukherjee
            </span>
            <p className="text-xs text-stone-500 font-medium">
              First-Year BCA Student &amp; Creative Code Apprentice
            </p>
          </div>

          {/* Social Nav Center */}
          <div className="flex gap-6 justify-center flex-wrap">
            <a
              href="https://github.com/satyaki03-web"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-pastel-red-dark transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/satyaki-mukherjee-26a498375"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-stone-600 hover:text-pastel-red-dark transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
          </div>

          {/* Slogan Right */}
          <p className="text-xs text-stone-400 font-mono font-semibold text-center md:text-right">
            © 2026 Satyaki Mukherjee. Crafted with balance.
          </p>

        </div>
      </footer>
    </div>
  );
}
