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
    <section id="contact" className="relative py-32 overflow-hidden">

      {/* Bottom ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-indigo-600/15 blur-[100px] pointer-events-none" />

      {/* Decorative watermark — purely visual, behind everything */}
      <div
        aria-hidden
        className="absolute inset-0 flex flex-col items-center justify-center leading-none font-black text-white/[0.03] select-none pointer-events-none overflow-hidden"
        style={{ fontSize: "clamp(6rem, 20vw, 16rem)" }}
      >
        <span>LET&apos;S</span>
        <span>TALK</span>
      </div>

      {/* Real content — sits above watermark */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
          className="text-accent-light font-mono text-sm mb-4"
        >
          06. contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 text-base sm:text-lg max-w-md mx-auto mb-10"
        >
          Whether you have an opportunity, a project, or just want to say hello — my inbox is always open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3"
        >
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl glass border border-white/10 hover:border-accent/50 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
            >
              <span className="text-accent-light">{link.icon}</span>
              {link.label}
              <FaArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
