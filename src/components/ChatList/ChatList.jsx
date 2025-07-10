import React from "react";
import ChatListItem from "./ChatListItem";
import "./ChatList.css";

export default function ChatList({ chats, selectedChat, onSelect, filter, setFilter }) {
  return (
    <div className="chat-list">
        
      <input
        className="chat-filter"
        placeholder="Filter by Title / Order ID"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {chats.map((chat) => (
        <ChatListItem
          key={chat.id}
          chat={chat}
          selected={selectedChat?.id === chat.id}
          onClick={() => onSelect(chat)}
        />
      ))}
    </div>
  );
}
