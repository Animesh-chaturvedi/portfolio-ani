"use client";

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-secondary to-primary py-20 px-4 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let&apos;s Connect</h2>
        <p className="text-gray-300 mb-10">
          Whether you have an opportunity or just want to say hello, my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="mailto:animesh.chaturvedi.1234@gmail.com"
            className="flex items-center gap-2 border border-[rgb(34,211,238)] px-6 py-3 rounded-full hover:bg-[rgb(34,211,238)] transition"
          >
            <FaEnvelope />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/animesh-chaturvedi-a75620154"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[rgb(34,211,238)] px-6 py-3 rounded-full hover:bg-[rgb(34,211,238)] transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://github.com/Animesh-chaturvedi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[rgb(34,211,238)] px-6 py-3 rounded-full hover:bg-[rgb(34,211,238)] transition"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
