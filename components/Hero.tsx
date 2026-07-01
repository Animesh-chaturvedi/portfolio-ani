"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowRight, FaDownload } from "react-icons/fa";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [6, -6]), { stiffness: 80, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-6, 6]), { stiffness: 80, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-violet-700/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full pt-24 pb-16">
        <motion.div variants={stagger} initial="hidden" animate="visible">

          {/* Available badge */}
          <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-slate-300 border border-indigo-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
            Available for new opportunities
          </motion.div>

          {/* Name with 3D parallax */}
          <motion.div style={{ rotateX, rotateY, transformPerspective: 1000 }}>
            <motion.h1 variants={fadeUp} className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-none tracking-tight">
              <span className="text-white block">ANIMESH</span>
              <span className="gradient-text glow-text block">CHATURVEDI</span>
            </motion.h1>
          </motion.div>

          {/* Role typewriter */}
          <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl font-mono text-slate-400">
            <span className="text-accent-light">&gt; </span>
            <Typewriter
              words={["Full-Stack Engineer", "AI Engineer", "Tech Lead", "React Native Developer"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </motion.p>

          {/* Stats */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-10">
            {[
              { value: "4+",   label: "Years experience" },
              { value: "10+",  label: "Apps shipped" },
              { value: "50k+", label: "Users served" },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-4xl font-black text-white">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-light text-white rounded-lg font-semibold transition-all duration-200 glow-accent"
            >
              View Work
              <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Animesh_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-all duration-200"
            >
              <FaDownload size={13} /> Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
