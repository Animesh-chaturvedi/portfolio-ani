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
    { name: "MongoDB", icon: <SiMongodb size={30} /> },
  ];
  
  const tools = [
    { name: "Git", icon: <SiGit size={30} /> },
    { name: "AWS", icon: <SiAmazon size={30} /> },
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
  
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 mb-12">
            {sectionMap[selected].map((skill: { name: string; icon: JSX.Element }) => (
              <div key={skill.name} className="flex items-center gap-1 text-white">
                {React.cloneElement(skill.icon, { size: 22 })}
                <span style={{ fontSize: '16px' }}>{skill.name}</span>
              </div>
            ))}
          </div>
  
          {/* Section selection buttons and Progress Line with Gradient */}
          <div className="flex flex-col items-center mt-6 w-full">
            <div className="flex justify-between w-3/4 max-w-xl mb-2">
              {sliderOptions.map((option) => (
                <button
                  key={option.label}
                  onClick={() => setSelected(option.label as "Frontend" | "Backend" | "Tools")}
                  className={`px-3 py-1 rounded-full font-semibold transition-colors duration-200 text-xs flex items-center gap-1
                    ${selected === option.label ? "bg-[rgb(34,211,238)] text-white" : "bg-gray-700 text-gray-300"}`}
                  aria-label={option.label}
                >
                  {option.icon}
                  <span className="hidden sm:inline">{option.label}</span>
                </button>
              ))}
            </div>
            <div className="w-3/4 max-w-xl h-3 rounded-full bg-gradient-to-r from-[rgb(34,211,238)] to-white" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  