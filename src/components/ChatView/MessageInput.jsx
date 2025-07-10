import React, { useState } from "react";
import "./ChatView.css";

export default function MessageInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="chat-input-box">
      <input
        type="text"
        placeholder="Type a message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
    </div>
  );
}
