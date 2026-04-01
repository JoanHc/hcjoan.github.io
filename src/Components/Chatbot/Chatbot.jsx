import React, { useEffect, useRef, useState } from "react";
import "./Chatbot.css";
import ChatbotIcon from "../Chat-image/ChatbotIcon";
import Chatform from "./Chatform";
import ChatMessage from "./ChatMessage";
import { MdClose, MdModeComment } from "react-icons/md";
import { developerInfo } from "../../developerinfo";

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: developerInfo,
    },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    // Funcion auxilar para actulizar el chat
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError },
      ]);
    };

    // Formatear el historial del chat para solicita la API
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));

    const requesOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ contents: history }),
    };
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requesOptions);
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Somenthing went wrong!");

      // limpia y actualiza el historial del chat
      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();

      // Actualiza el historial del chat con mensaje de error
      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    // Desplazamiento automatico cada vez que se actuliza el historial del chat
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);

  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        id="chatbot-toggler"
      >
        <span>
          <MdModeComment />
        </span>
        <span>
          <MdClose />
        </span>
      </button>
      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Asistente personal</h2>
          </div>
          <button
            onClick={() => setShowChatbot((prev) => !prev)}
            className="material-symbols-rounded"
          >
            keyboard_arrow_down
          </button>
        </div>
        {/* Chatbot body */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              ¡Hola! 👋 <br /> ¿Te gustaria saber más información de Joan?
            </p>
          </div>
          {/* Renderiso el historial del chat dinamico*/}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>
        {/* Chatbot footer */}
        <div className="chat-footer">
          <Chatform
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
