import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/nosotros.css";

const Nosotros = () => {
  return (
    <Container fluid className="nosotros-container p-5">
      {/* Introducción */}
      <Row className="text-center mb-5">
        <Col>
          <h2 className="titulo-seccion">Sobre Data Guard Technologies</h2>
          <p className="descripcion-seccion">
            Somos una empresa comprometida con la innovación tecnológica y el
            desarrollo sostenible. Nuestro equipo trabaja en colaboración con
            empresas nacionales, creando soluciones que marcan la diferencia.
          </p>
        </Col>
      </Row>

      {/* Misión, Visión y Valores */}
      <Row className="d-flex justify-content-around">
        <Col xs={12} md={4} className="mb-4">
          <Card className="card-nosotros">
            <Card.Body>
              <Card.Title className="card-titulo">Nuestra Misión</Card.Title>
              <Card.Text>
                Brindar soluciones tecnológicas innovadoras para transformar
                procesos y optimizar el rendimiento de nuestros clientes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className="mb-4">
          <Card className="card-nosotros">
            <Card.Body>
              <Card.Title className="card-titulo">Nuestra Visión</Card.Title>
              <Card.Text>
                Ser líderes nacionales en la integración de tecnología avanzada,
                generando un impacto positivo en la sociedad.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className="mb-4">
          <Card className="card-nosotros">
            <Card.Body>
              <Card.Title className="card-titulo">Nuestros Valores</Card.Title>
              <Card.Text>
                Innovación, compromiso, honestidad y trabajo en equipo definen
                nuestra identidad y guían nuestras acciones.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Secciones de Alianzas, Proveedores y Clientes */}
      <Row className="seccion mt-5">
        <Col className="text-center">
          <h3>Alianzas</h3>
          <p>Trabajamos de la mano con estas organizaciones:</p>
        </Col>
        <Row className="logos-row d-flex justify-content-center">
          <Col xs={6} md={3} className="mb-4 d-flex justify-content-center">
            <div className="logo-imagen aws"></div>
          </Col>
          <Col xs={6} md={3} className="mb-4 d-flex justify-content-center">
            <div className="logo-imagen alianza2"></div>
          </Col>
          <Col xs={6} md={3} className="mb-4 d-flex justify-content-center">
            <div className="logo-imagen alianza3"></div>
          </Col>
        </Row>
      </Row>

      <Row className="seccion mt-5">
        <Col className="text-center">
          <h3>Proveedores</h3>
          <p>Nuestros proveedores garantizan la excelencia:</p>
        </Col>
        <Row className="logos-row d-flex justify-content-center">
          <Col xs={6} md={3} className="mb-4 d-flex justify-content-center">
            <div className="logo-imagen proveedor1"></div>
          </Col>
          <Col xs={6} md={3} className="mb-4 d-flex justify-content-center">
            <div className="logo-imagen proveedor2"></div>
          </Col>
          <Col xs={6} md={3} className="mb-4 d-flex justify-content-center">
            <div className="logo-imagen proveedor3"></div>
          </Col>
        </Row>
      </Row>

      <Row className="seccion mt-5">
        <Col className="text-center">
          <h3>Clientes</h3>
          <p>Colaboramos con clientes que comparten nuestra visión:</p>
        </Col>
        <Row className="logos-row d-flex justify-content-center">
          <Col xs={6} md={3} className="mb-4 d-flex justify-content-center">
            <div className="logo-imagen cliente1"></div>
          </Col>
          <Col xs={6} md={3} className="mb-4 d-flex justify-content-center">
            <div className="logo-imagen cliente2"></div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Nosotros;


/* 
Alianzas
1.AWS
2.Federal Access

Proveedores
1.Microsoft
2.Veridas
3.Zendesk

3.GTD
4.Entel
5.Netline

*/