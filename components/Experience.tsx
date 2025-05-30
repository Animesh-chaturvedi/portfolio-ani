"use client";

import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { FaExternalLinkAlt } from "react-icons/fa";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Featurely.AI",
    companyLink: "https://featurely.ai",
    period: "Jan 2025 – Mar 2025",
    details: [
      "Led UI/UX initiatives, overseeing design and development while managing a team of two developers to enhance user experience and interface consistency.",
      "Designed and optimized agent prompting strategies for multiple AI agents, improving response accuracy."
    ]
  },
  {
    title: "Software Engineer",
    company: "REP3",
    companyLink: "https://rep3.gg",
    period: "Aug 2023 – Dec 2024",
    details: [
      "Developed home and campaign pages for partner DAOs at REP3 using Next.js and SCSS, enhancing user engagement and platform aesthetics.",
      "Played a key role in designing and leading the implementation of the admin platform to streamline the onboarding of new partner DAOs and manage live campaigns, collaborating closely with backend developers for API design and integration.",
      "Improved performance by 20% of our client-side website by leading the efforts for code refactoring and optimization."
    ]
  },
  {
    title: "Full Stack Engineer",
    company: "Lal10",
    companyLink: "https://lal10.com",
    period: "Jun 2022 – Jul 2023",
    details: [
      "Improved Chrome's lighthouse score to 96 by migrating the codebase to Next.js and implementing SSR which led to significant improvement in load time and code base size.",
      "Developed APIs on Lambda Functions in Node.js to facilitate smooth integration with ZOHOCRM, ZOHOERP, and Algolia, improving the application's functionality and user experience.",
      "Developed user-friendly screens using React-Native to efficiently manage inquiries and data flow within the application."
    ]
  },
  {
    title: "Frontend Engineer Intern",
    company: "DRepute",
    period: "Jan 2022 – Apr 2022",
    details: [
      "Conceptualized and implemented the front end of the landing page and a search space where users can find different types of DAOs, the exciting part of which was design perfection and fluent animation implementation."
    ]
  }
];

export default function Experience() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: i * 0.1,
      },
    }),
  };
  return (
    <motion.section
      id="experience"
      className="bg-[#f1f5f9] text-black py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>

        <div className="flex justify-center mb-10">
          <a
            href="/Animesh_Resume.pdf"
            download
            className="border border-indigo-400 text-indigo-400 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition flex items-center gap-2"
          >
            <HiDownload className="text-inherit" size={20} /> Download Resume
          </a>
        </div>

        <div className="relative border-l border-gray-300 mt-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="mb-10 relative"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={idx}
            >
              <div className="absolute left-0 w-3 h-3 bg-blue-500 rounded-full -ml-[7px] mt-[6px] z-10"></div>
              <div className="pl-4">
                <h3 className="text-lg font-bold">
                  {exp.title} @{" "}
                  {exp.companyLink ? (
                    <a
                      href={exp.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                    >
                      {exp.company}
                      <FaExternalLinkAlt size={12} className="inline" />
                    </a>
                  ) : (
                    exp.company
                  )}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-800 space-y-1">
                  {exp.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
