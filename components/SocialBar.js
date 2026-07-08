"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/dhanushsm617",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/dhanush-s-m-857858389/",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/__mr_dhanush____/",
    label: "Instagram",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:dhanushsm617@gmail.com",
    label: "Email",
  },
];

export default function SocialBar() {
  return (
    <>
      {/* Desktop */}

      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex fixed left-3 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-5"
      >
        {socials.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.2,
              y: -4,
            }}
            className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#ff5b5b] hover:border-[#ff5b5b] transition-all duration-300"
          >
            {social.icon}
          </motion.a>
        ))}

        <div className="w-px h-24 bg-linear-to-b from-[#ff5b5b] to-transparent mt-3" />
      </motion.div>

      {/* Mobile */}

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="lg:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="flex items-center gap-4 rounded-full border border-white/10 bg-black/70 backdrop-blur-xl px-5 py-3 shadow-2xl">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="text-xl text-gray-300 hover:text-[#ff5b5b] transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}