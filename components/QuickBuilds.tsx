"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const quickBuilds = [
  {
    title: "Wingman Overview Dashboard",
    description: "Dashboard for Wingman — a team and project management tool.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Animesh-chaturvedi/wingman-dashboard",
    live: "https://wingman-overview-dashboard.netlify.app/",
    image: "/quick-builds/wingman.png",
  },
  {
    title: "Streamify Dashboard",
    description: "Streaming analytics dashboard showing trending songs and key metrics for admins.",
    tags: ["React", "CSS", "Chart.js"],
    github: "",
    live: "https://streamify-dashboard-simplylabs.netlify.app/",
    image: "/quick-builds/streamify.png",
  },
];

export default function QuickBuilds() {
  return (
    <section id="quick-builds" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-accent-light font-mono text-sm mb-2">05. quick builds</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Side Projects</h2>
          <p className="text-slate-500 mt-3 max-w-xl">Small experiments built in a day or two to explore new ideas.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickBuilds.map((project, idx) => (
            <motion.div
              key={idx}
              className="group glass rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden bg-surface">
                <motion.div className="absolute inset-0" whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }}>
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-white text-lg">{project.title}</h3>
                  <div className="flex gap-2 flex-shrink-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition">
                        <FaGithub size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition">
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(t => (
                    <span key={t} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-dim text-accent-light border border-accent/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
