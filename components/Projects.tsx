"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Adhikar.AI",
    role: "Founder",
    period: "Aug 2023 – Dec 2023",
    description: [
      "Conducted market research by engaging with 30+ lawyers across litigation and corporate sectors.",
      "Built a Node.js-based web scraper to aggregate Indian Supreme Court judgments.",
      "Implemented an OpenAI-powered chatbot trained on legal sources for judgment search and document templates."
    ],
    techStack: ["Node.js", "OpenAI API", "JavaScript", "Express"],
    github: "", // Add GitHub link if available
    live: "",   // Add live link if available
  },
  {
    title: "Mudrex",
    role: "Frontend Engineer Intern & Freelancer",
    period: "Aug 2020 – Nov 2020",
    description: [
      "Built the admin platform UI for Mudrex.",
      "Developed a Pine-script code editor to let users create custom trading strategies."
    ],
    techStack: ["React", "JavaScript", "Pine Script"],
    github: "", // Add GitHub link if available
    live: "",   // Add live link if available
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white text-black py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
        {projects.map((project, idx) => (
          <div key={idx} className="mb-12 border-b pb-6">
            <div className="flex justify-between items-start flex-wrap">
              <div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">
                  {project.role} · {project.period}
                </p>
              </div>
              <div className="flex gap-3 mt-2 sm:mt-0">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                    <FaGithub size={18} />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
              </div>
            </div>
            <ul className="list-disc list-inside mt-4 space-y-1 text-gray-800">
              {project.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
