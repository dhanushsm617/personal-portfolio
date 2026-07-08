"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto h-20 px-6 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="text-3xl font-bold tracking-wide text-white"
          >
            Dhan<span className="text-[#ff5b5b]">ush </span>SM
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#hero"
              className="relative text-gray-300 hover:text-[#ff5b5b] transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#ff5b5b] after:transition-all hover:after:w-full"
            >
              Home
            </a>

            <a
              href="#skills"
              className="relative text-gray-300 hover:text-[#ff5b5b] transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#ff5b5b] after:transition-all hover:after:w-full"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="relative text-gray-300 hover:text-[#ff5b5b] transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#ff5b5b] after:transition-all hover:after:w-full"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="relative text-gray-300 hover:text-[#ff5b5b] transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-[#ff5b5b] after:transition-all hover:after:w-full"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-4xl"
          >
            {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 w-72 h-screen bg-[#080808] z-50 md:hidden"
            >
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setOpen(false)}
                  className="text-white text-4xl"
                >
                  <HiOutlineX />
                </button>
              </div>

              <div className="flex flex-col mt-6">
                <a
                  href="#hero"
                  onClick={() => setOpen(false)}
                  className="px-8 py-5 text-lg text-gray-300 border-b border-white/10 hover:bg-white/5 hover:text-[#ff5b5b] transition"
                >
                  Home
                </a>

                <a
                  href="#skills"
                  onClick={() => setOpen(false)}
                  className="px-8 py-5 text-lg text-gray-300 border-b border-white/10 hover:bg-white/5 hover:text-[#ff5b5b] transition"
                >
                  Skills
                </a>

                <a
                  href="#projects"
                  onClick={() => setOpen(false)}
                  className="px-8 py-5 text-lg text-gray-300 border-b border-white/10 hover:bg-white/5 hover:text-[#ff5b5b] transition"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="m-6 text-center px-6 py-3 rounded-lg bg-cyan-400 hover:bg-[#231a1a] transition text-white"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}