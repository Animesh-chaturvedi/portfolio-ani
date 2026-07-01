"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Persona Generator",
    period: "Dec 2024 – Dec 2025",
    description: "AI-powered persona generation system for Featurely.AI. Built with Next.js, integrates LangChain.js for dynamic persona creation with real-time data visualization.",
    tags: ["Next.js", "TypeScript", "LangChain.js", "Node.js", "AI"],
    github: "https://github.com/Animesh-chaturvedi/persona-featurely-frontend",
    live: "",
    featured: true,
    accent: "from-indigo-500/20 to-violet-500/10",
  },
  {
    title: "Adhikar.AI",
    period: "Aug 2023 – Dec 2023",
    description: "OpenAI-powered legal chatbot trained on Indian Supreme Court judgments, built after research with 30+ lawyers.",
    tags: ["Node.js", "OpenAI API", "Express"],
    github: "",
    live: "",
    featured: false,
    accent: "from-violet-500/15 to-purple-500/10",
  },
  {
    title: "Gene Overlapping",
    period: "Aug 2024 – Sept 2024",
    description: "Web app to visualize chicken genome gene overlapping regions. Select 3 genes and explore overlapping sequences.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Animesh-chaturvedi/gene-overlapping",
    live: "https://animesh-chaturvedi.github.io/gene-overlapping/",
    featured: false,
    accent: "from-blue-500/15 to-cyan-500/10",
  },
  {
    title: "Mudrex",
    period: "Aug 2020 – Nov 2020",
    description: "Admin platform UI and client-side Pine Script code editor for creating custom trading strategies.",
    tags: ["React", "JavaScript", "Pine Script"],
    github: "",
    live: "",
    featured: false,
    accent: "from-emerald-500/15 to-teal-500/10",
  },
];

function ProjectCard({ project, featured }: { project: typeof projects[0]; featured?: boolean }) {
  return (
    <motion.div
      className={`group glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 bg-gradient-to-br ${project.accent} ${featured ? "md:col-span-2" : ""}`}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={`flex flex-col h-full gap-4 ${featured ? "md:flex-row" : ""}`}>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className={`font-bold text-white ${featured ? "text-2xl" : "text-lg"}`}>{project.title}</h3>
            <div className="flex gap-2 flex-shrink-0">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition">
                  <FaGithub size={16} />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer"
                  className="text-slate-500 hover:text-white transition">
                  <FaExternalLinkAlt size={14} />
                </a>
              )}
            </div>
          </div>

          <p className="text-xs font-mono text-slate-500 mb-3">{project.period}</p>
          <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map(t => (
              <span key={t} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-dim text-accent-light border border-accent/20">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-accent-light font-mono text-sm mb-2">04. projects</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Selected Work</h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Featured */}
          {featured.map((p, i) => (
            <motion.div
              key={i}
              className="md:col-span-2"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={p} featured />
            </motion.div>
          ))}

          {/* Rest */}
          {rest.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
