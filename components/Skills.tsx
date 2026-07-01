"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiRedux, SiTailwindcss, SiNodedotjs, SiExpress, SiFirebase, SiMongodb,
  SiGraphql, SiDocker, SiGooglecloud, SiAmazon, SiOpenai, SiGit,
  SiPostman, SiJira, SiMysql,
} from "react-icons/si";
import { FaMobileAlt, FaBrain, FaRobot, FaSitemap, FaCode, FaInfinity } from "react-icons/fa";

const row1 = [
  { name: "React",        icon: <SiReact /> },
  { name: "Next.js",      icon: <SiNextdotjs /> },
  { name: "TypeScript",   icon: <SiTypescript /> },
  { name: "React Native", icon: <FaMobileAlt /> },
  { name: "Node.js",      icon: <SiNodedotjs /> },
  { name: "TailwindCSS",  icon: <SiTailwindcss /> },
  { name: "Redux",        icon: <SiRedux /> },
  { name: "Firebase",     icon: <SiFirebase /> },
  { name: "GraphQL",      icon: <SiGraphql /> },
  { name: "OpenAI",       icon: <SiOpenai /> },
  { name: "AWS",          icon: <SiAmazon /> },
  { name: "Docker",       icon: <SiDocker /> },
];

const row2 = [
  { name: "JavaScript",        icon: <SiJavascript /> },
  { name: "HTML5",             icon: <SiHtml5 /> },
  { name: "CSS3",              icon: <SiCss3 /> },
  { name: "Express.js",        icon: <SiExpress /> },
  { name: "MongoDB",           icon: <SiMongodb /> },
  { name: "SQL",               icon: <SiMysql /> },
  { name: "Google Cloud",      icon: <SiGooglecloud /> },
  { name: "LangChain.js",      icon: <FaBrain /> },
  { name: "LangGraph",         icon: <FaSitemap /> },
  { name: "Generative AI",     icon: <FaRobot /> },
  { name: "Prompt Engineering",icon: <FaCode /> },
  { name: "Git",               icon: <SiGit /> },
  { name: "CI/CD",             icon: <FaInfinity /> },
  { name: "Postman",           icon: <SiPostman /> },
  { name: "Jira",              icon: <SiJira /> },
];

function SkillPill({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass border border-white/5 text-slate-300 text-sm font-medium whitespace-nowrap mx-2 hover:border-accent/30 hover:text-white transition-all">
      <span className="text-accent-light text-base">{icon}</span>
      {name}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-16 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <p className="text-accent-light font-mono text-sm mb-2">03. skills</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Tech Stack</h2>
        </motion.div>
      </div>

      {/* Marquee row 1 — left */}
      <div className="relative mb-4">
        <div className="flex animate-marquee w-max">
          {[...row1, ...row1].map((s, i) => <SkillPill key={i} {...s} />)}
        </div>
        {/* fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent pointer-events-none z-10" />
      </div>

      {/* Marquee row 2 — right (reverse) */}
      <div className="relative">
        <div className="flex animate-marquee-reverse w-max">
          {[...row2, ...row2].map((s, i) => <SkillPill key={i} {...s} />)}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
