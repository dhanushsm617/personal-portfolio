"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-125 bg-[#ff5b5b]/10 rounded-full blur-[180px]" />

      <div className="container relative z-10">
        {/* Top */}

        {/* <div className="grid md:grid-cols-3 gap-12 py-20">
          About

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black">
              Dhanush<span className="text-[#ff5b5b]">.</span>
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Full Stack Developer passionate about creating beautiful,
              responsive and modern web applications using Next.js,
              React, Tailwind CSS and MongoDB.
            </p>
          </motion.div>

          Navigation

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .15 }}
            viewport={{ once: true }}
            className="md:mx-auto"
          >
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <a href="#home" className="hover:text-[#ff5b5b] transition">
                Home
              </a>

              <a href="#skills" className="hover:text-[#ff5b5b] transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-[#ff5b5b] transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-[#ff5b5b] transition">
                Say Hi
              </a>

            </div>
          // </motion.div>

          Social
        </div> */}

        {/* Bottom */}

        {/* Quote */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border- border-white/10 pt-12 pb-8 text-center"
        >
          <p className="px-4 text-lg md:text-xl font-bold text-gray-300 max-w-3xl mx-auto leading-8">
            ❝ With great <span className="text-red-400 animate-pulse">Power</span> comes great <span className="text-red-400 animate-pulse">Responsibility</span>. ❞
          </p>

          <p className="mt-3 text-3xl uppercase tracking-[4px] text-[#c8d188]">
            ☺ 
          </p>
        </motion.div>

        {/* Bottom */}

        <div className="border-t border-white/10 py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Social */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm uppercase tracking-[3px] text-gray-400 mb-5">
              Connect With Me
            </h3>

            <div className="flex gap-5 items-center">
              <a
                href="https://github.com/dhanushsm617"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ff5b5b] hover:border-[#ff5b5b] transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/dhanush-s-m-857858389/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/__mr_dhanush____/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* Copyright */}

          <p className="text-center text-gray-500">
            © {year} <span className=" font-semibold">Dhanush</span>.
            All rights reserved.
          </p>

          {/* Back To Top */}

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#ff5b5b] hover:scale-110 transition flex items-center justify-center shadow-lg shadow-red-500/30"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}
