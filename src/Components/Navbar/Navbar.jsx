import React, { useRef, useState } from "react";
import "./Navbar.css";

import AnchorLink from "react-anchor-link-smooth-scroll";
// imagenes
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  // Estado para saber qué enlace está activo (para el subrayado CSS)
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  // Función auxiliar para generar la clase activa
  const isActive = (section) => (menu === section ? "active" : "");

  return (
    <div className="navbar">
      <h2 className="nav-logo">Joan</h2> {/* Clase para estilizar el logo */}
      {/* Ícono de Abrir Menú (Solo móvil) */}
      <img
        src={menu_open}
        onClick={openMenu}
        alt="Abrir Menú"
        className="nav-mob-open"
      />
      {/* Lista de Navegación */}
      <ul ref={menuRef} className="nav-menu">
        {/* Ícono de Cerrar Menú (Solo móvil) */}
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Cerrar Menú"
          className="nav-mob-close"
        />

        {/* Enlaces de Navegación - Ahora usan la clase 'active' */}
        <li className={isActive("home")}>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>

        <li className={isActive("about")}>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
        </li>

        <li className={isActive("services")}>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
        </li>

        <li className={isActive("work")}>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Proyects</p>
          </AnchorLink>
        </li>

        <li className={isActive("contact")}>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      {/* Botón de Conexión (Desktop) */}
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
