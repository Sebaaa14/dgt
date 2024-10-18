import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import "../styles/proyectoDetalles.css";

const ProyectoDetalles = () => {
  const { id } = useParams();

  const projectDetails = {
    proyectoA: {
      title: "Servicios Integrales Illapel",
      description:
        "Es una empresa de servicios integrales automotriz, se realizó una aplicación web para vista de los usuarios y además un apartado de ventas de productos. Se priorizó también la creación de correos empresariales.",
      image: require("../images/proyectos/illapel.png"),
      duration: "6 meses",
    },
    proyectoB: {
      title: "Sistema de gestión de ingresos y egresos para ABV (SIEABV)",
      description:
        "La Asociación de Básquetbol de Valparaíso (ABV) solicitó un sistema para registrar ingresos y egresos, que anteriormente se manejaban en Excel. Se desarrolló SIEABV, un sistema que permite visualizar y gestionar transacciones, con opciones de impresión y modificación.",
      image: require("../images/proyectos/abv.jpg"),
      duration: "8 meses",
    },
    proyectoC: {
      title: "Fracciones Feroces",
      description:
        "Videojuego educativo matemático para enseñar a los alumnos de 5to a 8vo básico sobre las fracciones.",
      image: require("../images/proyectos/fracciones.png"),
      duration: "4 meses",
    },
    // proyectoD: {
    //   title: "Proyecto D",
    //   description: "Descripción del Proyecto D.",
    //   image: "",
    //   duration: "x meses",
    // },
  };

  const project = projectDetails[id];

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-5 project-card">
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <Image
              src={project?.image}
              alt={project?.title}
              fluid
              className="project-image"
            />
            <p className="project-duration mt-3">
              <strong>Duración del proyecto:</strong> {project?.duration}
            </p>
          </Col>
          <Col md={6}>
            <h1 className="project-title">{project?.title}</h1>
            <p className="project-description">{project?.description}</p>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProyectoDetalles;
