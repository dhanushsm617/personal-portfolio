"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import faq from "@/data/faq";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    setPosition({
      x: window.innerWidth - 90,
      y: window.innerHeight - 100,
    });
  }, []);

  const defaultSuggestions = [
    "Tell me about yourself",
    "Show your projects",
    "What are your skills?",
    "How can I contact you?",
  ];

  const [suggestions, setSuggestions] = useState(defaultSuggestions);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `# 👋 Welcome!

I'm **Dhanush AI**, your personal portfolio assistant.

I can help you with:

- 🚀 Projects
- 💻 Skills
- 📄 Resume
- 🎓 Education
- 💼 Experience
- 📬 Contact Information

Choose one of the suggestions below or ask me anything about Dhanush.`,
    },
  ]);

  const updateSuggestions = (text) => {
    const query = text.toLowerCase();

    if (query.includes("project") || query.includes("portfolio")) {
      setSuggestions([
        "HRMS Project",
        "Portfolio Website",
        "GitHub",
        "Live Demo",
      ]);
    } else if (query.includes("skill") || query.includes("technology")) {
      setSuggestions([
        "Frontend Skills",
        "Backend Skills",
        "Tools",
        "Experience",
      ]);
    } else if (
      query.includes("contact") ||
      query.includes("hire") ||
      query.includes("email")
    ) {
      setSuggestions(["Email", "Phone", "LinkedIn", "Hire Me"]);
    } else if (query.includes("resume") || query.includes("cv")) {
      setSuggestions([
        "Download Resume",
        "Education",
        "Projects",
        "Experience",
      ]);
    } else {
      setSuggestions(defaultSuggestions);
    }
  };

  // Local responses (No AI needed)

  const getLocalReply = (question) => {
    const q = question.toLowerCase().trim();

    for (const item of faq) {
      if (item.keywords.some((keyword) => q.includes(keyword.toLowerCase()))) {
        return item.answer;
      }
    }

    return null;
  };

  const handleSend = async (text) => {
    if (!text.trim()) return;

    updateSuggestions(text);

    const updatedMessages = [
      ...messages,
      {
        role: "user",
        content: text,
      },
    ];

    setMessages(updatedMessages);

    // Check FAQ first
    const localReply = getLocalReply(text);

    if (localReply) {
      setTyping(true);

      setTimeout(() => {
        setTyping(false);

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: localReply,
          },
        ]);
      }, 700);

      return;
    }

    // AI Fallback
    setTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          history: updatedMessages,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "⚠️ Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `# ⚠️ AI Temporarily Unavailable

I'm unable to connect to the AI service right now.

You can still ask me about:

- 👨 About Me
- 💻 Skills
- 🚀 Projects
- 📄 Resume
- 🎓 Education
- 💼 Experience
- 📬 Contact

Please try again in a few moments.`,
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
