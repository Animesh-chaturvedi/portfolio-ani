"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const quickBuilds = [
  {
    title: "Wingman Overview Dashboard",
    description: "A simple web app that show the dashboard of Wingman, a tool that helps you to manage your team and projects.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Animesh-chaturvedi/wingman-dashboard",
    live: "https://wingman-overview-dashboard.netlify.app/",
    image: "/quick-builds/wingman.png"
  },
  {
    title: "Streamify Dashboard",
    description: "A simple web app dashboad that show the trending songs and other matrices to the admin",
    techStack: ["React", "CSS", "Chart.js"],
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://streamify-dashboard-simplylabs.netlify.app/",
    image: "/quick-builds/streamify.png"
  },
  // {
  //   title: "Markdown Editor",
  //   description: "A real-time markdown editor with preview and export functionality.",
  //   techStack: ["React", "Marked.js", "Tailwind CSS"],
  //   github: "https://github.com/yourusername/markdown-editor",
  //   live: "https://markdown-editor-demo.vercel.app",
  //   image: "/quick-builds/markdown.png"
  // }
];

export default function QuickBuilds() {
  return (
    <section id="quick-builds" className="py-20 bg-blue-50/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">Quick Builds</h2>
        <p className="text-white text-center mb-12 max-w-2xl mx-auto">
          Small projects and experiments built in a day or two to explore new technologies and ideas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickBuilds.map((project, idx) => (
            <div
              key={idx}
              className="bg-blue-50/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-video bg-gray-200 relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Project Preview
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-white text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[rgba(34,211,238,0.1)] text-[rgb(34,211,238)] text-xs font-medium px-3 py-1 rounded-full border border-[rgb(34,211,238)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-500 transition-colors"
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
                      className="text-white hover:text-cyan-500 transition-colors"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 