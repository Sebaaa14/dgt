import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/inicio.css";

const Inicio = () => {
  return (
    <Container fluid className="p-0">
      <Row className="section section-1 d-flex align-items-center justify-content-center text-center">
        <Col>
          <h1 className="text-white">
            Soluciones inteligentes para un mundo eficiente
          </h1>
        </Col>
      </Row>
      <Row className="espacio"></Row>

      <Row className="section section-2 d-flex align-items-center justify-content-center text-center">
        <Col md={8}>
          <h3 className="text-white">Fuerte énfasis en innovación</h3>
          <p className="text-white">
            Nos hemos posicionado como una de las empresas TI más destacadas en
            innovación durante todo el año 2024.
          </p>
        </Col>
      </Row>
      <Row className="espacio"></Row>

      <Row className="section section-3 d-flex align-items-center justify-content-center text-center">
        <Col md={8}>
          <h3 className="text-white">Tecnología de último nivel</h3>
          <p className="text-white">
            El talento y expertise de nuestro equipo nos ha permitido liderar la
            implementación de nuevas tecnologías en el mercado.
          </p>
        </Col>
      </Row>
      <Row className="espacio"></Row>
    </Container>
  );
};

export default Inicio;
