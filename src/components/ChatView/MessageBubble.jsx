import React from "react";
import "./ChatView.css";

export default function MessageBubble({ msg, isLatest, onOptionClick }) {
  const isUser = msg.sender === "USER";
  const isOptioned = msg.messageType === "optionedMessage";

  return (
    <div className={`chat-bubble ${isUser ? "user" : "bot"}`}>
      {isOptioned ? (
        <button
          disabled={!isLatest}
          onClick={onOptionClick}
          className="chat-option-btn"
        >
          Request a Call
        </button>
      ) : (
        msg.message
      )}
    </div>
  );
}
