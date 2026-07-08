"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-15 bg-[#050505]"
    >
      {/* Background Glow */}

      <div className="absolute -top-32 right-0 w-100 h-100 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute bottom-0 left-0 w-100 h-100 rounded-full bg-[#ff5b5b]/10 blur-[180px]" />

      <div className="container relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 mt-20"
        >
          {/* <p className="uppercase tracking-[8px] font-semibold text-[#ff5b5b]">
            Portfolio
          </p> */}

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Featured Projects
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-gray-400 text-lg leading-9">
            Explore a selection of projects that showcase my experience in
            building responsive user interfaces, scalable backend systems and
            modern full-stack web applications.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

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
                y: -12,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-[#ff5b5b]/40"
            >
              {/* Image */}

              <div className="relative overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={500}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-2xl font-bold tracking-wide">
                  {project.title}
                </h3>

                <p className="mt-5 text-gray-400 leading-8">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="mt-7 flex flex-wrap gap-3">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#ff5b5b]/20 bg-[#ff5b5b]/10 px-4 py-2 text-sm font-medium text-[#ff5b5b]"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="mt-10 flex gap-4">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#ff5b5b] py-3.5 font-medium transition hover:bg-[#ff4040]"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-3.5 font-medium transition hover:border-white/20 hover:bg-white/10"
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