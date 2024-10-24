import React from "react";

const Skills = () => {
  const projects = [
    {
      name: "Carrito",
      url: "https://github.com/alejandrocupcakes/carrito"
    },
    {
      name: "Libro",
      url: "https://github.com/alejandrocupcakes/libro"
    }
  ];

  return (
    <section className="skills-container">
      <h4>Proyectos personales</h4>
      <div className="skills-content">
        <div className="skills-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-name">{project.name}</div>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Ver proyecto en GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;