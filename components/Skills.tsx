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

const domains = [
  {
    label: "Frontend",
    color: "from-indigo-500/20 to-violet-500/10",
    border: "border-indigo-500/20",
    dot: "bg-indigo-400",
    skills: [
      { name: "React",        icon: <SiReact /> },
      { name: "Next.js",      icon: <SiNextdotjs /> },
      { name: "TypeScript",   icon: <SiTypescript /> },
      { name: "JavaScript",   icon: <SiJavascript /> },
      { name: "React Native", icon: <FaMobileAlt /> },
      { name: "TailwindCSS",  icon: <SiTailwindcss /> },
      { name: "Redux",        icon: <SiRedux /> },
      { name: "HTML5",        icon: <SiHtml5 /> },
      { name: "CSS3",         icon: <SiCss3 /> },
    ],
  },
  {
    label: "Backend",
    color: "from-violet-500/20 to-blue-500/10",
    border: "border-violet-500/20",
    dot: "bg-violet-400",
    skills: [
      { name: "Node.js",     icon: <SiNodedotjs /> },
      { name: "Express.js",  icon: <SiExpress /> },
      { name: "MongoDB",     icon: <SiMongodb /> },
      { name: "SQL",         icon: <SiMysql /> },
      { name: "Firebase",    icon: <SiFirebase /> },
      { name: "GraphQL",     icon: <SiGraphql /> },
      { name: "Docker",      icon: <SiDocker /> },
      { name: "AWS",         icon: <SiAmazon /> },
      { name: "Google Cloud",icon: <SiGooglecloud /> },
    ],
  },
  {
    label: "AI / LLM",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/20",
    dot: "bg-emerald-400",
    skills: [
      { name: "OpenAI",              icon: <SiOpenai /> },
      { name: "LangChain.js",        icon: <FaBrain /> },
      { name: "LangGraph",           icon: <FaSitemap /> },
      { name: "Generative AI",       icon: <FaRobot /> },
      { name: "Prompt Engineering",  icon: <FaCode /> },
    ],
  },
  {
    label: "Tools",
    color: "from-slate-500/20 to-zinc-500/10",
    border: "border-slate-500/20",
    dot: "bg-slate-400",
    skills: [
      { name: "Git",     icon: <SiGit /> },
      { name: "CI/CD",   icon: <FaInfinity /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Jira",    icon: <SiJira /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-accent-light font-mono text-sm mb-2">03. skills</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Tech Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {domains.map((domain, di) => (
            <motion.div
              key={domain.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: di * 0.08 }}
              className={`glass rounded-2xl p-6 bg-gradient-to-br ${domain.color} border ${domain.border}`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2 h-2 rounded-full ${domain.dot}`} />
                <h3 className="text-sm font-mono font-semibold text-slate-300 uppercase tracking-widest">
                  {domain.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {domain.skills.map(skill => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-slate-300 text-xs font-medium hover:border-accent/30 hover:text-white transition-all"
                  >
                    <span className="text-accent-light">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
