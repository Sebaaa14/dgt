import React from "react";
import { useParams } from "react-router-dom";

const ProyectoDetalles = () => {
  const { id } = useParams();

  const projectDetails = {
    proyectoA: {
      title: "Proyecto A",
      description: "Descripción del Proyecto A.",
    },
    proyectoB: {
      title: "Proyecto B",
      description: "Descripción del Proyecto B.",
    },
    proyectoC: {
      title: "Proyecto C",
      description: "Descripción del Proyecto C.",
    },
    proyectoD: {
      title: "Proyecto D",
      description: "Descripción del Proyecto D.",
    },
  };

  const project = projectDetails[id];

  console.log(id);

  return (
    <div className="project-details">
      <h1>{project?.title}</h1>
      <p>{project?.description}</p>
    </div>
  );
};

export default ProyectoDetalles;
