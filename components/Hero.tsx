"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FaRocket } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const GlitterP5Background = dynamic(() => import("./GlitterP5Background"), { ssr: false });

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-gradient-to-b from-primary overflow-hidden">
      <GlitterP5Background />
      <h1 className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-300 mb-2 leading-relaxed">
        Hello <span className="inline-block animate-wave">👋🏼</span>
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-relaxed mb-2">
        I&apos;m <span className="font-semibold text-white">Animesh Chaturvedi</span>,{' '}
        <div className="text-accent">
          <Typewriter
            words={["Frontend Engineer", "Full-stack Engineer"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl max-w-xl text-white mt-4 leading-relaxed">
        I create clean, modern, and fully responsive websites that blend seamless design with functionality.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <a
          href="#projects"
          className="bg-gradient-to-r from-primary via-accent to-secondary text-white border-2 border-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition text-center"
        >
          <FaRocket className="inline-block mr-2 text-white" size={18} /> My Projects
        </a>
        <a
          href="#experience"
          className="border border-indigo-400 text-indigo-400 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition text-center"
        >
          Experience →
        </a>
      </div>
    </section>
  );
};

export default Hero;
  