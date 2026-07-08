"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: -300, y: -300 });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px] transition-all duration-150"
      style={{
        left: position.x - 160,
        top: position.y - 160,
      }}
    />
  );
}