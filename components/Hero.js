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
      className="relative min-h-screen mt-1 bg-[#050505] overflow-hidden flex items-center"
    >
      {/* Premium Background */}
      <MouseGlow />
      <GridBackground />
      <BackgroundShapes />

      {/* Extra Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-red-500/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-125 h-125 rounded-full bg-cyan-500/20 blur-[200px]" />

      <div className="container px-15 relative z-10 grid lg:grid-cols-3 gap-14 items-center pt-3 pb-2">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left flex flex-col gap-6"
        >
          <div>
            <h1 className="text-5xl mr-9 md:text-7xl xl:text-7xl font-black leading-tight">
              Hi,
              <br />
              I'm{" "}
              <span className="bg-linear-to-r from-[#ff5b5b] via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Dhanush
              </span>
            </h1>
          </div>

          <p className="text-xl mr-9 md:text-2xl text-gray-300">
            Full <span className="text-amber-500">Stack</span> Developer
          </p>

          <p className="max-w-md mr-9 text-gray-400 leading-8 mx-auto lg:mx-0">
            Passionate about building modern, responsive and high-performance
            web applications using React, Next.js, Tailwind CSS and MongoDB.
          </p>

          {/* Buttons */}

          <div className="flex mr-9 flex-wrap justify-center lg:justify-start gap-8">
            <a href="https://wa.me/917483125842?text=Hi%20Dhanush,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.">
              <button className="group px-8 py-4 rounded-xl bg-blue-500 hover:bg-[#d25212] transition-all duration-300 flex items-center gap-3 shadow-lg shadow-blue-500/30">
                Say Hi!
                <span className="bg-white/20 p-2 rounded-lg group-hover:translate-x-1 transition">
                  <FaArrowRight />
                </span>
              </button>
            </a>

            <a
              href="/Dhanush_SM.pdf"
              className="px-8 py-4 rounded-xl border border-white/10 hover:border-[#ff5b5b] hover:scale-105 hover:bg-white/5 transition"
            >
              Download CV
            </a>
          </div>

          {/* Social */}

          {/* <div className="flex justify-center lg:justify-start gap-5 pt-3">

            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/",
              },
              {
                icon: <FaLinkedin />,
                link: "https://linkedin.com/",
              },
              {
                icon: <FaInstagram />,
                link: "https://instagram.com/",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl text-gray-300 hover:text-white hover:border-[#ff5b5b] hover:bg-[#ff5b5b] transition-all duration-300"
              >
                {item.icon}
              </a>
            ))}

          </div> */}
        </motion.div>

        {/* CENTER */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.8 }}
          className="relative order-1 mt-25 lg:order-2 flex justify-center"
        >
          {/* Glow */}

          <div className="absolute w-75 h-75 md:w-107.5 md:h-107.5 rounded-full bg-[#ff5b5b]/20 blur-[120px]" />

          {/* Animated Ring */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            className="absolute w-90 mr-14 h-90 md:w-120 md:h-120 rounded-full border border-white/10"
          />

          {/* Floating Image */}

          <motion.div
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="relative  items-center justify-center mb-15 flex w-80 h-80 md:w-120 md:h-110 rounded-full "
          >
            <Image
              src="/images/dha.png"
              alt="Profile"
              width={500}
              height={650}
              priority
              className="relative mr-13 object-contain  rounded-full drop-shadow-[0_20px_60px_rgba(255,90,95,.5)]"
            />

            {/* Bottom Fade */}
            {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" /> */}
          </motion.div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-3 text-center lg:text-left"
        >
          <h3 className="text-[#ff5b5b] mr-9 text-xl font-semibold uppercase tracking-wider">
            About Me
          </h3>

          <h2 className="text-4xl mr-9 md:text-5xl font-bold leading-tight mt-5">
            Crafting
            <br />
            Beautiful Digital
            <br />
            Experiences.
          </h2>

          <p className="text-gray-400 mr-9 leading-8 mt-8">
            I specialize in creating beautiful websites with modern UI, smooth
            animations, responsive layouts and scalable backend architecture. I
            love transforming ideas into engaging digital experiences.
          </p>

          {/* <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10">
              <h3 className="text-3xl font-bold text-[#ff5b5b]">
                20+
              </h3>
              <p className="text-gray-400">
                Projects
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10">
              <h3 className="text-3xl font-bold text-cyan-400">
                2+
              </h3>
              <p className="text-gray-400">
                Years Learning
              </p>
            </div>

          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
