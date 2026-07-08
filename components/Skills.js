"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] py-15 md:py-32 lg:py-22"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-red-500/10 blur-[180px]" />
      <div className="absolute -bottom-20 -right-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[220px]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      <div className="container px-15 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-3xl text-center md:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Technologies I Use
          </h2>

          <p className="mx-auto mt-6 mb-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            Modern technologies that I use to build responsive, scalable and
            high-performance web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-3 xl:grid-cols-4 xl:gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:border-red-500/40 hover:bg-white/[0.08] sm:p-7 lg:p-8"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-cyan-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div
                  className={`relative z-10 mb-6 flex justify-center text-5xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 md:text-6xl ${skill.color}`}
                >
                  <Icon />
                </div>

                <h3 className="relative z-10 text-lg font-semibold md:text-xl">
                  {skill.title}
                </h3>

                <p className="relative z-10 mt-3 text-sm text-gray-400">
                  {skill.category}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}