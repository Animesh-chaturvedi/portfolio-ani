"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const experiences = [
  {
    index: "01",
    title: "Tech Lead",
    company: "Praan Health",
    companyLink: "",
    logoSrc: "/logos/praan.png",
    logo: "PH",
    period: "Jun 2025 – Present",
    tags: ["React Native", "Expo", "Google Cloud", "LLM", "Claude"],
    details: [
      "Led a team of 4 engineers to build a patient-facing React Native mobile app shipped to App Store and Play Store.",
      "Developed a React Native (Expo) internal team app used by 250+ care team members.",
      "Built a React admin platform for care team operations and protocol management.",
      "Architected a Google Cloud Run backend proxy for secure, vendor-agnostic clinical API integrations.",
      "Integrated CGM and Smart Scale APIs for real-time patient health metric tracking.",
      "Built an LLM pipeline using Claude (Anthropic) to auto-generate health reports and risk assessments.",
      "Driving EMR API integration (Eka Care) for patient management, lab reports, and appointments.",
    ],
  },
  {
    index: "02",
    title: "Senior Software Engineer",
    company: "Featurely.AI",
    companyLink: "https://featurely.ai",
    logoSrc: "/logos/featurely.svg",
    logo: "F·AI",
    period: "Jan 2025 – Apr 2025",
    tags: ["Next.js", "LangChain.js", "LangGraph", "AI Agents"],
    details: [
      "Led UI/UX initiatives, managing design systems and front-end architecture.",
      "Optimized AI agent prompting, reducing hallucinations and improving accuracy.",
      "Developed modular workflows with LangChain.js & LangGraph.",
    ],
  },
  {
    index: "03",
    title: "Software Engineer",
    company: "Rep3",
    companyLink: "",
    logoSrc: "",
    logo: "R3",
    period: "Aug 2023 – Dec 2024",
    tags: ["Next.js", "SCSS", "REST APIs", "Web3"],
    details: [
      "Built campaign page builder with Next.js & SCSS, enhancing engagement and visual appeal.",
      "Led admin platform development to streamline client onboarding and campaign management.",
      "Improved client-side performance by 20% through refactoring and optimization.",
    ],
  },
  {
    index: "04",
    title: "Full Stack Engineer",
    company: "Lal10",
    companyLink: "https://lal10.com",
    logoSrc: "/logos/lal10.png",
    logo: "L10",
    period: "Jun 2022 – Jul 2023",
    tags: ["Next.js", "Node.js", "AWS Lambda", "React Native"],
    details: [
      "Improved Chrome Lighthouse score to 96 by migrating to Next.js with SSR.",
      "Built AWS Lambda APIs integrating ZOHO CRM, ZOHO ERP, and Algolia.",
      "Developed React Native screens for inquiry and data flow management.",
    ],
  },
  {
    index: "05",
    title: "Software Engineer Intern",
    company: "DRepute",
    companyLink: "",
    logoSrc: "",
    logo: "DR",
    period: "Jan 2022 – Apr 2022",
    tags: ["React", "Animation", "Web3"],
    details: [
      "Designed and implemented the landing page and DAO search interface with smooth animations.",
    ],
  },
];

function Logo({ src, fallback }: { src: string; fallback: string }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className="w-10 h-10 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-400 tracking-wide flex-shrink-0">
        {fallback}
      </div>
    );
  }
  return (
    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1.5 flex-shrink-0">
      <Image src={src} alt={fallback} width={28} height={28} className="object-contain w-full h-full" onError={() => setFailed(true)} />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-14 flex items-end justify-between gap-6 flex-wrap"
        >
          <div>
            <p className="text-accent-light font-mono text-sm mb-2">02. experience</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">Work History</h2>
          </div>
          <a
            href="/Animesh_Resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-accent/40 text-accent-light hover:bg-accent-dim text-sm font-semibold transition"
          >
            <FaDownload size={13} /> Download CV
          </a>
        </motion.div>

        {/* Cards */}
        <div className="space-y-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="group glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Index */}
                <span className="text-3xl font-black text-white/5 group-hover:text-white/10 transition font-mono leading-none mt-1 hidden sm:block">
                  {exp.index}
                </span>

                <div className="flex-1 min-w-0">
                  {/* Logo + title row */}
                  <div className="flex items-start gap-3 mb-3">
                    <Logo src={exp.logoSrc} fallback={exp.logo} />
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {exp.title}
                        {" "}
                        <span className="text-slate-500 font-normal">@</span>
                        {" "}
                        {exp.companyLink ? (
                          <a href={exp.companyLink} target="_blank" rel="noopener noreferrer"
                            className="text-accent-light hover:text-white transition-colors inline-flex items-center gap-1">
                            {exp.company} <FaExternalLinkAlt size={10} />
                          </a>
                        ) : (
                          <span className="text-slate-300">{exp.company}</span>
                        )}
                      </h3>
                      <p className="text-xs text-slate-500 font-mono mt-0.5">{exp.period}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tags.map(t => (
                      <span key={t} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent-dim text-accent-light border border-accent/20">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-1.5">
                    {exp.details.map((d, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-400">
                        <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
