"use client";

import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;

    onSend(text);

    setText("");
  };

  return (
    <div className="border-t border-white/10 p-4">
      <div className="flex gap-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          placeholder="Ask me anything..."
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-[#ff5b5b]"
        />

        <button
          onClick={send}
          className="rounded-xl bg-[#ff5b5b] px-5 transition hover:bg-[#ff4040]"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}