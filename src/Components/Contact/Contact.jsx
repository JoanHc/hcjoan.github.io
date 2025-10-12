import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Asegúrate de que el 'access_key' sea el correcto para tu formulario
    formData.append("access_key", "20b5ec35-4937-4257-8185-c41798086bd5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Variable para el elemento donde se mostrará el mensaje (opcional, si no usas 'alert')
    const formMessage = document.getElementById("form-message");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        // 🚀 Personalización: Mensaje de éxito
        const successMessage =
          "¡Tu mensaje ha sido enviado con éxito! Nos pondremos en contacto contigo pronto. 😊";

        // Puedes usar 'alert' para una notificación simple:
        alert(successMessage);

        // Opcional: Limpiar el formulario después del envío exitoso
        event.target.reset();
      } else {
        // Mensaje en caso de fallo (usa el mensaje de error de la API o uno genérico)
        const errorMessage =
          data.message ||
          "Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo. 😞";

        alert(errorMessage);
      }
    } catch (error) {
      // Manejo de errores de red o del proceso de fetch
      console.error("Error al enviar el formulario:", error);
      alert("Error de conexión. Verifica tu red e intenta de nuevo.");
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>iiibibibnjnjn</p>
          <div className="contact-details">
            <div className="conact-detail">
              <img src={mail_icon} alt="" />{" "}
              <p>joanhernandezcampero4@gmail.com</p>
            </div>
            <div className="conact-detail">
              <img src={call_icon} alt="" /> <p>+52 771-364-5293</p>
            </div>
            <div className="conact-detail">
              <img src={location_icon} alt="" /> <p>Actopan, Hidalgo</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Whrite your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
