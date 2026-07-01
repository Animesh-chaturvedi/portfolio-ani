"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";

const links = [
  { icon: <FaEnvelope size={18} />, label: "Email",    href: "mailto:animesh.chaturvedi.1234@gmail.com" },
  { icon: <FaLinkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/animesh-chaturvedi-a75620154" },
  { icon: <FaGithub size={18} />,   label: "GitHub",   href: "https://github.com/Animesh-chaturvedi" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/15 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-accent-light font-mono text-sm mb-2">06. contact</p>
        </motion.div>

        {/* Big decorative text */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="text-[clamp(3rem,12vw,9rem)] font-black leading-none text-white/4 select-none pointer-events-none"
          >
            LET'S<br/>TALK
          </motion.div>
          <div className="absolute inset-0 flex flex-col justify-center pl-2 md:pl-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-5xl font-black text-white"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-400 mt-3 max-w-md text-sm md:text-base"
            >
              Whether you have an opportunity, a project, or just want to say hello — my inbox is always open.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 hover:border-accent/40 text-slate-300 hover:text-white text-sm font-medium transition-all"
                >
                  <span className="text-accent-light">{link.icon}</span>
                  {link.label}
                  <FaArrowRight size={10} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
