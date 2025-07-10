import React, { useEffect, useState } from "react";
import ChatList from "./components/ChatList/ChatList";
import ChatView from "./components/ChatView/ChatView";
import { fetchChats } from "./utils/api";
import "./styles/app.css";

export default function App() {
  const [chatList, setChatList] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchChats().then(setChatList);
  }, []);

  const filteredChats = chatList.filter(
    (chat) =>
      chat.title.toLowerCase().includes(filter.toLowerCase()) ||
      chat.orderId.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app-container">
      <ChatList
        chats={filteredChats}
        selectedChat={selectedChat}
        onSelect={setSelectedChat}
        filter={filter}
        setFilter={setFilter}
      />
      <ChatView chat={selectedChat} />
    </div>
  );
}
