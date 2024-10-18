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
      <Row className="espacio d-flex align-items-center justify-content-center text-center">
        <h5>Trabajo colaborativo con distintas empresas</h5>
      </Row>

      <Row className="section section-2 align-items-center text-center py-5">
        <Col xs={12} md={5} className="text-container-row2">
          <h2 className="texto2">Fuerte énfasis en innovación</h2>
          <p className="text-white">
            Nos hemos posicionado como una de las empresas TI más destacadas en
            innovación durante todo el año 2024.
          </p>
        </Col>
        <Col
          xs={12}
          md={5}
          className="fila2col2 d-flex justify-content-center align-items-center"
        >
          <div className="image-container"></div>
        </Col>
      </Row>

      <Row className="espacio d-flex align-items-center justify-content-center text-center">
        <h5>Número 1 en gestión de relaciones</h5>
      </Row>

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
