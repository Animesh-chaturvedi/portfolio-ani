"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const listener = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.01); // 1vh scroll trigger
    };
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    "Home",
    "Experience",
    "Skills",
    "Projects",
    "Quick Builds",
    "Contact",
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-secondary"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-white">
          <div className="text-xl font-bold">AC</div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6 font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-semibold px-3 py-1 rounded transition hover:bg-indigo-400 hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-md z-50 transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative h-full">
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>

          {/* Menu items */}
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center gap-8 text-xl">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-semibold px-3 py-1 rounded transition hover:bg-indigo-400 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
