"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

import BackgroundShapes from "./BackgroundShapes";
import GridBackground from "./GridBackground";
import MouseGlow from "./MouseGlow";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center justify-center py-12 lg:py-0"
    >
      {/* Premium Background Effects */}
      <MouseGlow />
      <GridBackground />
      <BackgroundShapes />

      {/* Responsive Extra Ambient Glows */}
      <div className="absolute -top-20 -left-20 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-red-500/20 blur-[120px] sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-[500px] sm:h-[500px] rounded-full bg-cyan-500/20 blur-[140px] sm:blur-[200px] pointer-events-none" />

      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 xl:gap-12 items-center w-full">
        
        {/* LEFT COLUMN: INTRO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start gap-4 sm:gap-6"
        >
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-7xl font-black leading-tight tracking-tight">
              Hi,
              <br />
              I'm{" "}
              <span className="bg-gradient-to-r from-[#ff5b5b] via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Dhanush
              </span>
            </h1>
          </div>

          <p className="text-lg sm:text-2xl text-gray-300 font-medium">
            Full <span className="text-amber-500">Stack</span> Developer
          </p>

          <p className="max-w-md text-sm sm:text-base text-gray-400 leading-relaxed">
            Passionate about building modern, responsive, and high-performance
            web applications using React, Next.js, Tailwind CSS, and MongoDB.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="https://wa.me/917483125842?text=Hi%20Dhanush,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
              className="sm:w-auto"
            >
              <button className="w-full sm:w-auto group px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-[#d25212] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-500/25 text-white font-medium">
                Say Hi!
                <span className="bg-white/20 p-1.5 rounded-lg group-hover:translate-x-1 transition-transform">
                  <FaArrowRight className="text-sm" />
                </span>
              </button>
            </a>

            <a
              href="/DhanushSM_Resume.pdf"
              className=" sm:w-auto text-center px-7 py-3.5 rounded-xl border border-white/10 hover:border-[#ff5b5b] hover:bg-white/5 transition duration-300 text-white font-medium"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        {/* CENTER COLUMN: PROFILE IMAGE & ROTATING RING */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative order-1 lg:order-2 flex justify-center items-center my-6 lg:my-0"
        >
          {/* Ambient Image Glow */}
          <div className="absolute w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-[#ff5b5b]/20 blur-[80px] sm:blur-[120px]" />

          {/* Animated Rotating Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            className="absolute w-64 h-64 mt-6 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] rounded-full border border-white/10 pointer-events-none"
          />

          {/* Floating Profile Image Frame */}
          <motion.div
            animate={{
              y: [-6, 6, -6],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="relative w-66 h-66 sm:w-82 sm:h-82 lg:w-84 lg:h-84 xl:w-108 xl:h-108 flex items-center justify-center rounded-full"
          >
            <Image
              src="/images/dha.png"
              alt="Dhanush Profile"
              width={500}
              height={650}
              priority
              className="object-contain w-full h-full rounded-full drop-shadow-[0_15px_35px_rgba(255,90,95,0.4)]"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: ABOUT PREVIEW */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-3 text-center lg:text-left flex flex-col items-center lg:items-start gap-3 sm:gap-4"
        >
          <h3 className="text-[#ff5b5b] text-sm sm:text-base font-semibold uppercase tracking-widest">
            About Me
          </h3>

          <h2 className="text-2xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold leading-tight">
            Crafting <br className="hidden sm:inline" />
            Beautiful Digital <br className="hidden sm:inline" />
            Experiences.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
            I specialize in creating beautiful websites with modern UI, smooth
            animations, responsive layouts, and scalable backend architecture. I
            love transforming ideas into engaging digital experiences.
          </p>
        </motion.div>

      </div>
    </section>
  );
}