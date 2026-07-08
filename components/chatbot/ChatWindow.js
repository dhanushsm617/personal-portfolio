"use client";

import { motion } from "framer-motion";
import { FaRobot, FaTimes } from "react-icons/fa";
import { useEffect, useRef } from "react";

import Message from "./Message";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

export default function ChatWindow({
  messages,
  onSend,
  typing,
  suggestions,
  onClose,
  position,
}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const screenWidth =
    typeof window !== "undefined" ? window.innerWidth : 1200;

  const screenHeight =
    typeof window !== "undefined" ? window.innerHeight : 800;

  const isMobile = screenWidth < 640;

  const chatWidth = isMobile ? screenWidth - 20 : 420;
  const chatHeight = isMobile ? screenHeight * 0.8 : 680;

  const buttonSize = 56;
  const gap = 16;

  const isLeftSide = position.x < screenWidth / 2;

  let left = isLeftSide
    ? position.x + buttonSize + gap
    : position.x - chatWidth - gap;

  let top = position.y - chatHeight + buttonSize;

  left = Math.max(10, Math.min(left, screenWidth - chatWidth - 10));
  top = Math.max(10, Math.min(top, screenHeight - chatHeight - 10));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.25 }}
      style={{
        position: "fixed",
        left: isMobile ? 10 : left,
        right: isMobile ? 10 : "auto",
        top: isMobile ? "auto" : top,
        bottom: isMobile ? 80 : "auto",
        zIndex: 9998,
      }}
      className="
      flex
      flex-col
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-[#0b0b0d]/95
      backdrop-blur-3xl
      shadow-[0_25px_80px_rgba(0,0,0,.6)]
      w-[420px]
      h-[680px]
      max-w-[calc(100vw-20px)]
      max-h-[80vh]
    "
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#181818] to-[#111111] px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff5b5b] to-[#ff8a8a] shadow-lg shadow-red-500/40">
            <FaRobot className="text-lg text-white" />

            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 ring-2 ring-[#111]" />
          </div>

          <div>
            <h2 className="font-bold text-white">
              Dhanush AI
            </h2>

            <p className="text-xs text-green-400">
              • Online
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="rounded-xl p-2 transition hover:bg-white/10"
        >
          <FaTimes />
        </button>
      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
        {messages.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
            <div className="mb-3 text-4xl">👋</div>

            <h3 className="text-xl font-semibold">
              Welcome!
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              I'm Dhanush's AI Assistant.

              <br />

              Ask me about my projects,
              skills, education, resume,
              technologies or contact details.
            </p>
          </div>
        )}

        {messages.map((message, index) => (
          <Message
            key={index}
            role={message.role}
            content={message.content}
          />
        ))}

        {typing && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}

      <div className="border-t border-white/10 px-4 py-3">
        <div className="flex flex-wrap gap-2">
          {suggestions.map((item) => (
            <button
              key={item}
              onClick={() => onSend(item)}
              className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-xs
              text-gray-300
              transition-all
              duration-300
              hover:scale-105
              hover:border-[#ff5b5b]
              hover:bg-[#ff5b5b]
              hover:text-white
            "
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}

      <div className="border-t border-white/10 bg-[#101010]">
        <ChatInput onSend={onSend} />
      </div>
    </motion.div>
  );
}