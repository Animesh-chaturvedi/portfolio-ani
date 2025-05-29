"use client";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Persona Generator",
    // role: "Full Stack Developer",
    period: "Dec 2024 – Dec 2025",
    description: [
      "Developed a comprehensive persona generation system that creates detailed user personas based on input data.",
      "Built a modern frontend application for Featurely.AI using Next.js and TypeScript.",
      "Implemented real-time data visualization and interactive UI components for better user experience.",
      "Integrated AI-powered features for dynamic persona generation and customization."
    ],
    techStack: ["Next.js", "TypeScript", "JavaScript", "Node.js", "AI Integration", "Langchainjs", "Node.js" ],
    github: "https://github.com/Animesh-chaturvedi/persona-featurely-frontend",
    live: "",   // Add live link if available
  },
  {
    title: "Adhikar.AI",
    // role: "Founder",
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
    // role: "Frontend Engineer Intern & Freelancer",
    period: "Aug 2020 – Nov 2020",
    description: [
      "Built the admin platform UI for Mudrex.",
      "Developed a clinet-side Pine-script code editor to let users create custom trading strategies."
    ],
    techStack: ["React", "JavaScript", "Pine Script"],
    github: "", // Add GitHub link if available
    live: "",   // Add live link if available
  },
  {
    title: "Gene Overlapping",
    // role: "Full Stack Developer",
    period: "Aug 2024 – Sept 2024",
    description: [
      "Developed a web application to visualize chicken gene overlapping in a genome.",
      "User can select 3 genes and see the overlapping regions.",
      "User can also see the gene sequence and the overlapping regions."
    ],
    techStack: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Animesh-chaturvedi/gene-overlapping", // Add GitHub link if available
    live: "https://animesh-chaturvedi.github.io/gene-overlapping/",   // Add live link if available
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-100 text-black py-12 sm:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">My Projects</h2>
        <div className="grid gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {project.period}
                  </p>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-700 hover:text-black transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-700 hover:text-black transition-colors"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                </div>
              </div>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                {project.description.map((point, i) => (
                  <li key={i} className="text-sm sm:text-base">{point}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
