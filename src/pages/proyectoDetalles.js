import React from "react";
import { useParams } from "react-router-dom";

const ProyectoDetalles = () => {
  const { id } = useParams();

  const projectDetails = {
    proyectoA: {
      title: "Servicios Integrales Illapel",
      description:
        "Es una empresa de servicios integrales automotriz, se le realizo una aplicación web para vista de los usuarios y además un apartado de ventas de productos, se priorizo tambien la creación de correos empresariales",
    },
    proyectoB: {
      title: "Sistema de gestión de ingresos y egresos para ABV (SIEABV)",
      description:
        "La Asociación de Básquetbol de Valparaíso (ABV) ha solicitado a DGT el desarrollo de un sistema que permita registrar los ingresos y egresos que se perciben. Previamente, no contaban con un sistema para realizar dichas actividades, así que utilizaban planillas excel y para asegurarse que se tenían todas las transacciones correctas del mes, se revisaba la cartola de movimientos de la cuenta del banco. Además, redactaban las transacciones individualmente en documentos y se imprimían para su posterior archivo en carpetas. Entonces se tenían respaldas físicamente en caso de averío del computador. DGT realizó un sistema de ingresos y egresos llamado SIEABV que tenía las siguientes funcionalidades: Visualizar en tabla los ingresos y egresos, pudiendo filtrar por mes, tipo de transacción y rango de monto.Ingresar nuevas transacciones por medio de un formulario, donde también se contaba con la opción de imprimir luego de enviar. Por defecto se genera el documento con la plantilla solicitada por el cliente Modificar la información de una transacción existente, también con la opción de imprimir",
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
