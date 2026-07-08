"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-5 sm:px-8 lg:px-12 py-20 md:py-28"
    >
      {/* Background Glow */}

      <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#ff5b5b]/10 blur-[180px]" />

      <div className="container relative z-10 mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            Explore a selection of projects that showcase my experience in
            building responsive user interfaces, scalable backend systems and
            modern full-stack web applications.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-[#ff5b5b]/40 hover:shadow-[0_0_35px_rgba(255,91,91,.15)]"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={500}
                  className="h-52 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-56 lg:h-64"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Content */}

              <div className="p-5 sm:p-6 lg:p-8">
                <h3 className="text-xl font-bold tracking-wide sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#ff5b5b]/20 bg-[#ff5b5b]/10 px-3 py-1.5 text-xs font-medium text-[#ff5b5b] sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#ff5b5b] px-5 py-3 font-medium transition duration-300 hover:bg-[#ff4040]"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a> */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-medium transition duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}