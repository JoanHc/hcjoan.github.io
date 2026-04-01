import ChatbotIcon from "../Chat-image/ChatbotIcon";

const ChatMessage = ({ chat }) => {
  return (
    !chat.hideInChat && (
      <div
        className={`message ${chat.role === "model" ? "bot" : "user"}-message ${
          chat.isError ? "error" : ""
        }`}
      >
        {chat.role === "model" && <ChatbotIcon />}

        <div className="message-container">
          <p className="message-text">{chat.text}</p>
          <span className="message-time">{chat.timestamp}</span>
        </div>
      </div>
    )
  );
};

export default ChatMessage;
