"use client";

import { motion } from "framer-motion";
import { FaRobot, FaUser } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Message({ role, content }) {
  const isUser = role === "user";

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`flex items-end gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* AI Avatar */}
      {!isUser && (
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ff5b5b] to-[#ff7a7a] shadow-lg shadow-red-500/30">
          <FaRobot className="text-lg text-white" />
        </div>
      )}

      {/* Message */}
      <div className="flex max-w-[82%] min-w-0 flex-col">
        <div
          className={`overflow-hidden rounded-3xl px-5 py-4 shadow-lg break-words ${
            isUser
              ? "rounded-br-md bg-gradient-to-r from-[#ff5b5b] via-[#ff4d6d] to-[#ff758f] text-white"
              : "rounded-bl-md border border-white/10 bg-white/5 text-gray-200 backdrop-blur-xl"
          }`}
          style={{
            overflowWrap: "anywhere",
            wordBreak: "break-word",
          }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="mb-3 text-2xl font-bold text-white">
                  {children}
                </h1>
              ),

              h2: ({ children }) => (
                <h2 className="mb-3 mt-4 text-xl font-bold text-white">
                  {children}
                </h2>
              ),

              h3: ({ children }) => (
                <h3 className="mb-2 mt-3 text-lg font-semibold text-white">
                  {children}
                </h3>
              ),

              p: ({ children }) => (
                <p className="mb-3 leading-7 break-words last:mb-0">
                  {children}
                </p>
              ),

              strong: ({ children }) => (
                <strong className="font-bold text-white">
                  {children}
                </strong>
              ),

              ul: ({ children }) => (
                <ul className="mb-3 list-disc space-y-1 pl-5">
                  {children}
                </ul>
              ),

              ol: ({ children }) => (
                <ol className="mb-3 list-decimal space-y-1 pl-5">
                  {children}
                </ol>
              ),

              li: ({ children }) => (
                <li className="break-words">
                  {children}
                </li>
              ),

              blockquote: ({ children }) => (
                <blockquote className="my-4 border-l-4 border-[#ff5b5b] bg-white/5 py-3 pl-4 italic text-gray-300">
                  {children}
                </blockquote>
              ),

              table: ({ children }) => (
                <div className="my-4 overflow-x-auto">
                  <table className="min-w-full border border-white/10">
                    {children}
                  </table>
                </div>
              ),

              th: ({ children }) => (
                <th className="border border-white/10 bg-white/10 px-4 py-2 text-left">
                  {children}
                </th>
              ),

              td: ({ children }) => (
                <td className="border border-white/10 px-4 py-2">
                  {children}
                </td>
              ),

              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block max-w-full break-all text-cyan-400 underline underline-offset-4 hover:text-cyan-300"
                >
                  {children}
                </a>
              ),

              code({ inline, className, children }) {
                const match = /language-(\w+)/.exec(className || "");

                if (!inline && match) {
                  return (
                    <SyntaxHighlighter
                      language={match[1]}
                      style={oneDark}
                      PreTag="div"
                      customStyle={{
                        borderRadius: "12px",
                        padding: "16px",
                        marginTop: "12px",
                        marginBottom: "12px",
                        fontSize: "14px",
                      }}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  );
                }

                return (
                  <code className="rounded bg-black/40 px-2 py-1 text-sm text-red-300">
                    {children}
                  </code>
                );
              },
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
          <FaUser className="text-lg text-white" />
        </div>
      )}
    </motion.div>
  );
}