import React from "react";
import { formatDate } from "../../utils/dateUtils";
import "./ChatList.css";

export default function ChatListItem({ chat, selected, onClick }) {
  const latestMsg = chat.messageList.at(-1);

  return (
    <div className={`chat-item ${selected ? "selected" : ""}`} onClick={onClick}>
      <img src={chat.imageURL} alt="product" className="chat-item-image" />
      <div className="chat-item-details">
        <div className="chat-item-title">{chat.title}</div>
        <div className="chat-item-order">{chat.orderId}</div>
      </div>
      {latestMsg && <div className="chat-item-date">{formatDate(latestMsg.timestamp)}</div>}
    </div>
  );
}
