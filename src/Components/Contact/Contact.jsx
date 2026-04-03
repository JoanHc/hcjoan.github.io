import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
// Nota: Si no tienes un icono de reloj, puedes usar call_icon temporalmente o importar uno de react-icons
import { FaClock, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "20b5ec35-4937-4257-8185-c41798086bd5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

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
        alert("¡Tu mensaje ha sido enviado con éxito! 😊");
        event.target.reset();
      } else {
        alert(data.message || "Hubo un problema al enviar el formulario.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Error de conexión.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      {/* PARTE IZQUIERDA: INFORMACIÓN DE CONTACTO */}
      <div className="contact-section">
        <div className="contact-left">
          <h1>¡Let's talk!</h1>
          <p className="contact-desc">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y
            ayudarte a convertirlas en realidad.
          </p>

          <div className="contact-grid">
            {/* Email */}
            <div className="contact-detail-card">
              <img src={mail_icon} alt="Email" />
              <div className="detail-info">
                <span>Email</span>
                <p>joanhernandezcampero4@gmail.com</p>
              </div>
            </div>

            {/* Teléfono */}
            <div className="contact-detail-card">
              <img src={call_icon} alt="Teléfono" />
              <div className="detail-info">
                <span>Teléfono</span>
                <p>+52 771 364 5293</p>
              </div>
            </div>

            {/* Ubicación */}
            <div className="contact-detail-card">
              <img src={location_icon} alt="Ubicación" />
              <div className="detail-info">
                <span>Ubicación</span>
                <p>Hidalgo, México</p>
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="contact-detail-card">
              <div className="icon-placeholder">
                <FaClock color="#fffff" size={25} />
              </div>
              <div className="detail-info">
                <span>Disponibilidad</span>
                <p>Lun - Vie, 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* PARTE DERECHA: FORMULARIO */}
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />

          <label>Your email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />

          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            <FaPaperPlane /> Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
