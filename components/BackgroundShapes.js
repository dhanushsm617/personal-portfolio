"use client";

import { motion } from "framer-motion";

const circles = [
  {
    size: 250,
    top: "8%",
    left: "-5%",
    color: "bg-cyan-500/20",
    duration: 12,
  },
  {
    size: 180,
    top: "70%",
    left: "80%",
    color: "bg-pink-500/20",
    duration: 10,
  },
  {
    size: 100,
    top: "30%",
    left: "70%",
    color: "bg-red-500/20",
    duration: 8,
  },
  {
    size: 80,
    top: "75%",
    left: "20%",
    color: "bg-purple-500/20",
    duration: 6,
  },
];

export default function BackgroundShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {circles.map((circle, index) => (
        <motion.div
          key={index}
          animate={{
            y: [-25, 25, -25],
            x: [-10, 10, -10],
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: circle.duration,
            ease: "linear",
          }}
          className={`absolute rounded-full blur-3xl ${circle.color}`}
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
          }}
        />
      ))}

    </div>
  );
}