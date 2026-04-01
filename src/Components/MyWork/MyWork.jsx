import { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../services/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
// Iconos de React
import { FaGithub, FaEye } from "react-icons/fa";

const MyWork = () => {
  // 1. Definimos el límite inicial de proyectos a mostrar
  const initial_limit = 3;

  // 2. Definimos el estado para el número de proyectos visibles
  const [visibleProjects, setVisibleProjects] = useState(initial_limit);

  // 3. Definimos la cantidad de proyectos a agregar con cada clic
  const projects_to_add = 3;

  // 4. Lógica para alternar entre Mostrar Más y Ocultar
  const handleToggleProjects = () => {
    const totalProjects = mywork_data.length;

    // Si el número actual de proyectos visibles es igual al total, OCULTA (vuelve al límite inicial)
    if (visibleProjects >= totalProjects) {
      setVisibleProjects(initial_limit);
    }
    // Si no, MUESTRA MÁS (aumenta el límite en 'projects_to_add')
    else {
      // Calcula el nuevo límite para asegurarse de no exceder el total de proyectos
      const newLimit = Math.min(
        visibleProjects + projects_to_add,
        totalProjects,
      );
      setVisibleProjects(newLimit);
    }
  };

  // 5. Variables para el texto y la visibilidad del botón
  const allProjectsShown = visibleProjects >= mywork_data.length;

  // Si todos están mostrados, el texto debe ser "Show Less" u "Ocultar"
  const buttonText = allProjectsShown ? "Show Less" : "Show More";

  // Opcional: Solo mostramos el botón si hay más proyectos de los iniciales
  const shouldShowButton = mywork_data.length > initial_limit;

  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {/* Mapea y renderiza solo la porción visible de los datos */}
        {mywork_data.slice(0, visibleProjects).map((work, index) => {
          return (
            <div key={index} className="mywork-card">
              <img
                src={work.w_img}
                alt={work.w_name}
                className="mywork-card-img"
              />

              <div className="mywork-card-info">
                <h2 className="mywork-card-name">{work.w_name}</h2>
                <p className="mywork-card-description">{work.w_description}</p>
                <div className="mywork-card-tech">
                  {work.w_tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mywork-card-links">
                  <a
                    href={work.w_demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button demo-button"
                  >
                    <FaEye className="link-icon" />
                    <p>Ver Demo</p>
                  </a>
                  <a
                    href={work.w_repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button repo-button"
                  >
                    <FaGithub className="link-icon" />
                    <p>Repositorio</p>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Renderiza el botón solo si hay más proyectos de los iniciales */}
      {shouldShowButton && (
        <div
          className="mywork-showmore"
          onClick={handleToggleProjects} // 👈 Usa la nueva función de alternancia
        >
          <p>{buttonText}</p> {/* 👈 El texto cambia dinámicamente */}
          {/* Opcional: Podrías cambiar el ícono de la flecha si es "Show Less" */}
          <img
            src={arrow_icon}
            alt=""
            style={{
              transform: allProjectsShown ? "rotate(180deg)" : "none",
              transition: "transform 0.3s",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MyWork;
