import React from "react";
import "./Footer.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        {/* --- Left Section: Summary --- */}
        <div className="footer-section footer-summary">
          <h2 className="summary-logo">Joan</h2>
          <p className="summary-description">
            Developer Fronend apasionado por crear soluciones tecnológicas
            innovadoras.
          </p>
          <div className="summary-social">
            {/* Replace with actual social icons later */}
            <div className="social-icon">
              <FaLinkedin />
            </div>
            <div className="social-icon">
              <FaGithub />
            </div>
          </div>
        </div>

        {/* --- Middle Section: Links --- */}
        <div className="footer-section footer-links">
          <h3>Enlaces</h3>
          <ul>
            <li>
              <AnchorLink href="#home">Home</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about">About me</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#services">Services</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#work">Proyects</AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact">Contact</AnchorLink>
            </li>
          </ul>
        </div>

        {/* --- Right Section: Contact --- */}
        <div className="footer-section footer-contact">
          <h3>Contacto</h3>
          <ul>
            <li>joanhernandezcampero4@gmail.com</li>
            <li>+52 771-364-5293</li>
            <li>Actopan, Hidalgo</li>
          </ul>
        </div>

        {/* --- Right-Most Section: Technologies --- */}
        <div className="footer-section footer-tech">
          <h3>Tecnologías</h3>
          <div className="tech-tags">
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">Vue Js</span>
            <span className="tech-tag">React</span>
            <span className="tech-tag">Flutter</span>
            <span className="tech-tag">Firebase</span>
            <span className="tech-tag">MySQL</span>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* --- Bottom Bar: Copyright --- */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2025 Joan Hernández. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
