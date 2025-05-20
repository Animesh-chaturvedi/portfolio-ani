"use client";
import React, { useState, JSX } from "react";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiMysql,
    SiGit,
    SiAmazon,
    SiMongodb,
    SiZoho,
    SiAlgolia,
    SiOpenai,
    SiRedux,
  } from "react-icons/si";
  
  const frontend = [
    { name: "HTML", icon: <SiHtml5 size={30} /> },
    { name: "CSS", icon: <SiCss3 size={30} /> },
    { name: "JavaScript", icon: <SiJavascript size={30} /> },
    { name: "TypeScript", icon: <SiTypescript size={30} /> },
    { name: "React", icon: <SiReact size={30} /> },
    { name: "Next.js", icon: <SiNextdotjs size={30} /> },
    { name: "Redux", icon: <SiRedux size={30} /> },
  ];
  
  const backend = [
    { name: "Node.js", icon: <SiNodedotjs size={30} /> },
    { name: "Express.js", icon: <SiExpress size={30} /> },
    { name: "MySQL", icon: <SiMysql size={30} /> },
  ];
  
  const tools = [
    { name: "Git", icon: <SiGit size={30} /> },
    { name: "AWS", icon: <SiAmazon size={30} /> },
    { name: "MongoDB", icon: <SiMongodb size={30} /> },
    { name: "ZOHO", icon: <SiZoho size={30} /> },
    { name: "Algolia", icon: <SiAlgolia size={30} /> },
    { name: "OpenAI", icon: <SiOpenai size={30} /> },
  ];
  
  const Skills = () => {
    const [selected, setSelected] = useState<"Frontend" | "Backend" | "Tools">("Frontend");
    const sliderOptions = [
      { label: "Frontend", icon: <SiReact size={20} /> },
      { label: "Backend", icon: <SiNodedotjs size={20} /> },
      { label: "Tools", icon: <SiGit size={20} /> },
    ];
    const sectionMap: Record<"Frontend" | "Backend" | "Tools", { name: string; icon: JSX.Element }[]> = {
      Frontend: frontend,
      Backend: backend,
      Tools: tools,
    };
    return (
      <section id="skills" className="bg-gradient-to-b from-primary to-secondary py-20 px-4 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What I Bring to the Table</h2>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mb-12">
            {sectionMap[selected].map((skill: { name: string; icon: JSX.Element }) => (
              <div key={skill.name} className="flex flex-col items-center">
                {skill.icon}
                <p className="text-sm mt-2">{skill.name}</p>
              </div>
            ))}
          </div>
  
          <div className="flex justify-center mt-6">
            <div className="w-3/4 max-w-xl relative">
              <div className="h-3 bg-gray-600 rounded-full flex items-center">
                <div className="absolute left-0 top-1/2 w-full h-3 -translate-y-1/2 bg-gray-600 rounded-full z-0" />
                <div
                  className={`absolute left-0 top-1/2 h-3 -translate-y-1/2 rounded-full transition-all duration-300 z-10 ${
                    selected === "Frontend"
                      ? "bg-blue-500 w-1/3"
                      : selected === "Backend"
                      ? "bg-blue-500 w-2/3"
                      : "bg-blue-500 w-full"
                  }`}
                />
                {sliderOptions.map((option, idx) => (
                  <button
                    key={option.label}
                    className={`absolute z-20 top-1/2 -translate-y-1/2 flex flex-col items-center transition-colors duration-200 focus:outline-none ${
                      idx === 0
                        ? "left-0 -translate-x-1/2"
                        : idx === 1
                        ? "left-1/2 -translate-x-1/2"
                        : "right-0 translate-x-1/2"
                    }`}
                    onClick={() => setSelected(option.label as "Frontend" | "Backend" | "Tools")}
                  >
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors duration-200 mb-1 ${
                        selected === option.label
                          ? "bg-blue-500 border-blue-500 text-white"
                          : "bg-gray-700 border-gray-400 text-gray-300"
                      }`}
                    >
                      {option.icon}
                    </span>
                    <span
                      className={`text-xs font-semibold transition-colors duration-200 ${
                        selected === option.label ? "text-blue-400" : "text-gray-300"
                      }`}
                    >
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  