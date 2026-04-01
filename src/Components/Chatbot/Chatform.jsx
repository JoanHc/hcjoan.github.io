import { useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Chatform = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    //Actulizacion del historial del chat
    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage, timestamp },
    ]);

    setTimeout(
      () =>
        setChatHistory((history) => [
          ...history,
          { role: "model", text: "Thinking...", timestamp },
        ]),
      600
    );
    // Llamar la funcion para generar el bot response
    generateBotResponse([
      ...chatHistory,
      {
        role: "user",
        text: `Using the details provided above, please address this query: ${userMessage}`,
      },
    ]);
  };

  return (
    <form action="" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Message..."
        className="message-input"
        required
      />
      <button className="send-btn">
        <FaPaperPlane className="icon" />
      </button>
    </form>
  );
};

export default Chatform;
