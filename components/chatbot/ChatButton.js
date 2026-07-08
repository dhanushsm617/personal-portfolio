"use client";

import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import { useRef } from "react";

export default function ChatButton({
  open,
  setOpen,
  position,
  setPosition,
}) {
  const isDragging = useRef(false);

  return (
    <motion.button
      drag
      dragMomentum={false}
      dragElastic={0}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        x: position.x,
        y: position.y,
        boxShadow: [
          "0 0 20px rgba(255,91,91,.4)",
          "0 0 35px rgba(255,91,91,.8)",
          "0 0 20px rgba(255,91,91,.4)",
        ],
      }}
      transition={{
        x: {
          type: "spring",
          stiffness: 400,
          damping: 30,
        },
        y: {
          type: "spring",
          stiffness: 400,
          damping: 30,
        },
        boxShadow: {
          repeat: Infinity,
          duration: 2,
        },
      }}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 9999,
      }}
      onDragStart={() => {
        isDragging.current = false;
      }}
      onDrag={(e, info) => {
        isDragging.current = true;

        setPosition({
          x: info.point.x,
          y: info.point.y,
        });
      }}
      onDragEnd={(e, info) => {
        const buttonSize = 56;
        const margin = 20;

        const snapX =
          info.point.x < window.innerWidth / 2
            ? margin
            : window.innerWidth - buttonSize - margin;

        const snapY = Math.max(
          margin,
          Math.min(
            info.point.y,
            window.innerHeight - buttonSize - margin
          )
        );

        setPosition({
          x: snapX,
          y: snapY,
        });

        setTimeout(() => {
          isDragging.current = false;
        }, 100);
      }}
      onClick={() => {
        if (!isDragging.current) {
          setOpen((prev) => !prev);
        }
      }}
      className="
        flex
        h-14
        w-14
        cursor-grab
        active:cursor-grabbing
        select-none
        items-center
        justify-center
        rounded-full
        bg-gradient-to-r
        from-[#ff5b5b]
        to-pink-500
        text-2xl
        text-white
        shadow-2xl
      "
    >
      <FaRobot />
    </motion.button>
  );
}