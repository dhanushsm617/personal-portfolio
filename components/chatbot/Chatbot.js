"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);

  // Initial safe position
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  // Set the initial button position after the component mounts
  useEffect(() => {
    setPosition({
      x: window.innerWidth - 90,
      y: window.innerHeight - 100,
    });
  }, []);

  const suggestions = [
    "Tell me about yourself",
    "Show your projects",
    "What are your skills?",
    "How can I contact you?",
  ];

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hi! I'm Dhanush's AI Assistant. Ask me anything about my portfolio.",
    },
  ]);

  const handleSend = async (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: text,
      },
    ]);

    setTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply || "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Sorry, I couldn't process your request.",
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  return (
    <>
      <ChatButton
        open={open}
        setOpen={setOpen}
        position={position}
        setPosition={setPosition}
      />

      <AnimatePresence mode="wait">
        {open && (
          <ChatWindow
            key="chat-window"
            position={position}
            messages={messages}
            typing={typing}
            suggestions={suggestions}
            onSend={handleSend}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}