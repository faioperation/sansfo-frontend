import React, { useEffect, useState } from "react";
import axios from "axios";
import { Send, Paperclip, Camera, Plus, ArrowLeft } from "lucide-react";

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [input, setInput] = useState("");
  // On mobile: show chat panel only when a user is selected
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    axios.get("/users.json").then((res) => {
      setUsers(res.data);
      setSelectedUser(res.data[0]);
    });
  }, []);

  useEffect(() => {
    axios.get("/messages.json").then((res) => {
      setMessages(res.data);
    });
  }, []);

  const filteredMessages = messages.filter(
    (msg) => msg.userId === selectedUser?.id
  );

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: Date.now(),
      userId: selectedUser.id,
      sender: "me",
      text: input,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setShowChat(true); // on mobile: switch to chat view
  };

  const handleBack = () => {
    setShowChat(false); // on mobile: go back to list
  };

  return (
    <div className="flex h-[calc(100vh-56px)] bg-[#F7F5F3] overflow-hidden">

      {/* ======= LEFT PANEL (user list) ======= */}
      <div
        className={`
          w-full md:w-[280px] flex-shrink-0
          bg-[#F2F0EE] overflow-y-auto
          flex flex-col
          ${showChat ? "hidden md:flex" : "flex"}
        `}
      >
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => handleSelectUser(user)}
            className={`flex items-center gap-3 px-4 py-4 cursor-pointer transition border-b border-gray-200/50 ${selectedUser?.id === user.id
                ? "bg-white shadow-sm"
                : "hover:bg-white/60"
              }`}
          >
            <div className="relative flex-shrink-0">
              <img
                src={user.avatar}
                className="w-12 h-12 rounded-full object-cover"
                alt={user.name}
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-sm text-gray-800 truncate">
                  {user.name}
                </h4>
                <span className="text-xs text-gray-400 flex-shrink-0 ml-2">Now</span>
              </div>
              <p className="text-xs text-green-500 mt-0.5">● {user.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ======= CHAT AREA ======= */}
      <div
        className={`
          flex-1 flex flex-col min-w-0
          ${showChat ? "flex" : "hidden md:flex"}
        `}
      >
        {/* HEADER */}
        {selectedUser && (
          <div className="flex items-center gap-3 px-4 md:px-8 py-4 bg-[#F7F5F3] border-b border-gray-200/50 flex-shrink-0">
            {/* Back arrow on mobile */}
            <button
              onClick={handleBack}
              className="md:hidden text-gray-500 mr-1"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="relative flex-shrink-0">
              <img
                src={selectedUser.avatar}
                className="w-12 h-12 rounded-full object-cover"
                alt={selectedUser.name}
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{selectedUser.name}</h4>
              <p className="text-xs text-green-500">● {selectedUser.status}</p>
            </div>
            <span className="ml-auto text-xs text-gray-400">Now</span>
          </div>
        )}

        {/* MESSAGES */}
        <div className="flex-1 px-4 md:px-8 py-6 overflow-y-auto space-y-4">
          <div className="flex justify-center mb-2">
            <span className="text-xs bg-gray-200 text-gray-500 px-4 py-1 rounded-full font-medium">
              TODAY
            </span>
          </div>

          {filteredMessages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
            >
              <div
                className={`px-4 py-3 rounded-2xl text-sm max-w-[75%] md:max-w-[55%] ${msg.sender === "me"
                    ? "bg-[#4FA9B0] text-white rounded-tr-sm"
                    : "bg-[#E8E8E8] text-gray-800 rounded-tl-sm"
                  }`}
              >
                {msg.text}
                <div className="text-[10px] mt-1 text-right opacity-60 flex items-center justify-end gap-1">
                  {msg.time}
                  {msg.sender === "me" && (
                    <span className="text-white/70">✓✓</span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* QUICK ACTIONS */}
          <div className="flex gap-3 flex-wrap pt-2">
            {["Book appointment", "Check availability", "Speak to a human"].map(
              (btn, i) => (
                <button
                  key={i}
                  className="px-5 py-2 bg-white border border-gray-200 rounded-full text-sm text-[#4FA9B0] font-semibold shadow-sm hover:bg-[#4FA9B0] hover:text-white transition-all duration-200"
                >
                  {btn}
                </button>
              )
            )}
          </div>
        </div>

        {/* INPUT BAR */}
        <div className="px-4 md:px-8 py-4 bg-[#F7F5F3] flex-shrink-0">
          <div className="flex items-center bg-white rounded-full shadow-sm border border-gray-100 px-3 py-2 gap-2">
            <button className="text-gray-400 hover:text-[#4FA9B0] transition p-1">
              <Plus size={20} />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Message The Fluid Dialogue..."
              className="flex-1 outline-none text-sm bg-transparent text-gray-700 placeholder-gray-400"
            />
            <button className="text-gray-400 hover:text-[#4FA9B0] transition p-1">
              <Paperclip size={18} />
            </button>
            <button className="text-gray-400 hover:text-[#4FA9B0] transition p-1">
              <Camera size={18} />
            </button>
            <button
              onClick={handleSend}
              className="bg-[#4FA9B0] p-2.5 rounded-full text-white shadow-sm hover:bg-[#3d9097] transition ml-1"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;