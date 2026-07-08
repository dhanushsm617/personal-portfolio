"use client";

import { motion } from "framer-motion";
import { FaRobot, FaUser } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Message({ role, content }) {
  const isUser = role === "user";

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`flex items-end gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* AI Avatar */}

      {!isUser && (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ff5b5b] to-[#ff7a7a] shadow-lg shadow-red-500/30">
          <FaRobot className="text-white text-lg" />
        </div>
      )}

      {/* Message */}

      <div className="flex max-w-[82%] flex-col">
        <div
          className={`rounded-3xl px-5 py-4 text-[15px] leading-7 shadow-lg ${
            isUser
              ? "rounded-br-md bg-gradient-to-r from-[#ff5b5b] via-[#ff4d6d] to-[#ff758f] text-white"
              : "rounded-bl-md border border-white/10 bg-white/8 text-gray-200 backdrop-blur-xl"
          }`}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => (
                <p className="mb-2 last:mb-0">{children}</p>
              ),

              strong: ({ children }) => (
                <strong className="font-semibold text-white">
                  {children}
                </strong>
              ),

              ul: ({ children }) => (
                <ul className="list-disc pl-5 space-y-1">
                  {children}
                </ul>
              ),

              ol: ({ children }) => (
                <ol className="list-decimal pl-5 space-y-1">
                  {children}
                </ol>
              ),

              code: ({ children }) => (
                <code className="rounded bg-black/40 px-2 py-1 text-red-300 text-sm">
                  {children}
                </code>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>

        <span
          className={`mt-2 text-xs text-gray-500 ${
            isUser ? "text-right" : "text-left"
          }`}
        >
          {time}
        </span>
      </div>

      {/* User Avatar */}

      {isUser && (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30">
          <FaUser className="text-white text-lg" />
        </div>
      )}
    </motion.div>
  );
}