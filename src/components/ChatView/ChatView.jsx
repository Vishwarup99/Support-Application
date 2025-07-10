import React, { useState, useEffect } from "react";
import { formatChatDate, isSameDate } from "../../utils/dateUtils";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import "./ChatView.css";

export default function ChatView({ chat }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chat) {
      const sorted = [...chat.messageList].sort((a, b) => a.timestamp - b.timestamp);
      setMessages(sorted);
    }
  }, [chat]);

  const sendMessage = (text) => {
    console.log("User message sent:", text);
    const newMsg = {
      messageId: `user-${Date.now()}`,
      message: text,
      timestamp: Date.now(),
      sender: "USER",
      messageType: "text",
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  if (!chat) return <div className="chat-view-empty">Select a chat</div>;

  return (
    <div className="chat-view">
      <div className="chat-messages">
        {messages.length === 0 ? (
          <div className="chat-empty-msg">Send a message to start chatting</div>
        ) : (
          [...messages].reverse().map((msg, idx, arr) => {
            const showDate =
              idx === arr.length - 1 || !isSameDate(msg.timestamp, arr[idx + 1]?.timestamp);

            return (
              <div key={msg.messageId}>
                {showDate && (
                  <div className="chat-date-label">{formatChatDate(msg.timestamp)}</div>
                )}
                <MessageBubble
                  msg={msg}
                  isLatest={msg === messages.at(-1)}
                  onOptionClick={() => sendMessage("I want a callback")}
                />
              </div>
            );
          })
        )}
      </div>
      <MessageInput onSend={sendMessage} />
    </div>
  );
}
