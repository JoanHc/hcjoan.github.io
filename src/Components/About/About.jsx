import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/joan_1.jpeg";

//  Datos externalizados (Mejora: ¡No repitas código!)
const skillsData = [
  { name: "HTML & CSS", level: 50 },
  { name: "Tailwind ", level: 20 },
  { name: "React JS", level: 65 },
  { name: "Vue JS", level: 30 },
];

const achievementsData = [
  { count: "1+", label: "AÑOS DE EXPERIENCIA" },
  { count: "6+", label: "PROYECTOS COMPLETADOS" },
  { count: "1", label: "CLIENTE SATISFECHO" },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Patrón de decoración" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="Foto de perfil" />
        </div>
        {/*Contenido del párrafo actualizado para un portafolio personal */}
        <div className="about-right">
          <div className="about-para">
            <p>
              Desarrollador Front-End con pasión por la creación de aplicaciones
              web intuitivas, eficientes y de alto rendimiento. Enfocado en el
              desarrollo de soluciones robustas y escalables, aplicando las
              mejores prácticas del sector para garantizar experiencias
              digitales de calidad, optimizadas para el usuario y el
              rendimiento.
            </p>
            <p>
              Me destaco por mi capacidad de colaboración en equipo y por mi
              pasión por transformar diseños atractivos en experiencias
              digitales funcionales y código limpio.
            </p>
          </div>

          {/*Habilidades: Renderizado dinámico con .map() */}
          <div className="about-skills">
            {skillsData.map((skill, index) => (
              <div key={index} className="about-skill">
                <p>{skill.name}</p>
                {/* Estilo dinámico para el ancho de la barra de progreso */}
                <hr style={{ width: `${skill.level}%` }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logros: Renderizado dinámico con .map() */}
      <div className="about-achievements">
        {achievementsData.map((achievement, index) => (
          // El separador <hr> se elimina aquí para un diseño más moderno y se maneja con el grid/flex de CSS
          <React.Fragment key={index}>
            <div className="about-achievement">
              <h1>{achievement.count}</h1>
              <p>{achievement.label}</p>
            </div>
            {/* Si no es el último logro, inserta el separador visual que estaba en el CSS */}
            {index < achievementsData.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default About;
