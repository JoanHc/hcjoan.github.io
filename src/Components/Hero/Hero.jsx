import React from "react";
import "./Hero.css";
import profile_img from "../../assets/pedo1.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
// Importacion para animaciones
import { ReactTyped } from "react-typed";
// Importamos los nuevos iconos sociales
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRocket, FaFileDownload } from "react-icons/fa";

// Función para descargar CV
const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/CV-Joan Hernánde C.pdf";
  link.download = "CV-Joan Hernánde C.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img
        src={profile_img}
        alt="Foto de perfil de Joan Hernández"
        className="hero-profile-img"
      />

      <h1>
        <span>I'm Joan Hernández, </span>
        <span className="typing-wrapper">
          <ReactTyped
            strings={[
              "Frontend Developer",
              "React lover",
              "UI designer",
              "creative coder",
            ]}
            typeSpeed={100}
            backSpeed={60}
            loop
            className="typed-text"
          />
        </span>
      </h1>

      <p className="hero-description">Apasionado por seguir aprendiendo</p>

      {/* SECCIÓN: ENLACES SOCIALES */}
      <div className="hero-social-links">
        <a
          href="https://github.com/JoanHc"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="social-icons" />
        </a>

        <a
          href="https://linkedin.com/in/joanhc/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="social-icons" />
        </a>

        <a href="mailto:joanhernandezcampero4@gmail.com" aria-label="Email">
          <MdEmail className="social-icons" />
        </a>
      </div>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <FaRocket style={{ marginRight: "6px" }} />
            Proyectos
          </AnchorLink>
        </div>
        <div
          className="hero-resume"
          onClick={downloadCV}
          style={{ cursor: "pointer" }}
        >
          <FaFileDownload style={{ marginRight: "6px" }} />
          Descargar CV
        </div>
      </div>
    </div>
  );
};

export default Hero;
