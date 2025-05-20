"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FaRocket } from "react-icons/fa";

const GlitterP5Background = dynamic(() => import("./GlitterP5Background"), { ssr: false });

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-primary overflow-hidden">
      <GlitterP5Background />
      <h1 className="text-2xl sm:text-3xl font-normal text-gray-300 mb-2 leading-relaxed">
        Hello <span className="inline-block animate-wave">👋🏼</span>
      </h1>
      <h2 className="text-4xl sm:text-5xl font-bold text-white leading-relaxed mb-2">
        I'm <span className="font-semibold text-white">Animesh Chaturvedi</span>, a Frontend Engineer.
      </h2>
      <p className="text-xl sm:text-2xl max-w-xl text-white mt-4 leading-relaxed">
        I create clean, modern, and fully responsive websites that blend seamless design with functionality.
      </p>
      <div className="flex gap-4 mt-8">
        <a
          href="#projects"
          className="bg-gradient-to-r from-primary via-accent to-secondary text-white border-2 border-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition"
        >
          <FaRocket className="inline-block mr-2 text-white" size={18} /> My Projects
        </a>
        <a
          href="#experience"
          className="border border-indigo-400 text-indigo-400 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition"
        >
          Experience →
        </a>
      </div>
    </section>
  );
};

export default Hero;
  