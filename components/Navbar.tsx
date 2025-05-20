"use client";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.01); // 1vh scroll trigger
    };
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-secondary"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="text-xl font-bold">AC</div>
        <ul className="flex gap-6 font-medium">
          {["Home", "Experience", "Skills", "Blogs", "Projects", "Content", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-accent transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
