"use client";

import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff5b5b]">
        <FaRobot />
      </div>

      <div className="flex gap-2 rounded-2xl rounded-bl-sm border border-white/10 bg-white/5 px-4 py-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.6,
              delay: i * 0.2,
            }}
            className="h-2 w-2 rounded-full bg-white"
          />
        ))}
      </div>
    </div>
  );
}