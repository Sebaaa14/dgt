import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
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
        {["Nuestra Misión", "Nuestra Visión", "Nuestros Valores"].map(
          (titulo, index) => (
            <Col xs={12} md={4} key={index} className="mb-4">
              <Card className="card-nosotros">
                <Card.Body>
                  <Card.Title className="card-titulo">{titulo}</Card.Title>
                  <Card.Text>
                    {titulo === "Nuestra Misión" &&
                      "Brindar soluciones tecnológicas innovadoras para transformar procesos y optimizar el rendimiento de nuestros clientes."}
                    {titulo === "Nuestra Visión" &&
                      "Ser líderes nacionales en la integración de tecnología avanzada, generando un impacto positivo en la sociedad."}
                    {titulo === "Nuestros Valores" &&
                      "Innovación, compromiso, honestidad y trabajo en equipo definen nuestra identidad y guían nuestras acciones."}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>

      {/* Secciones de Alianzas, Proveedores y Clientes */}
      {[
        {
          titulo: "Alianzas",
          subtitulo: "Trabajamos de la mano con estas organizaciones:",
          logos: ["alianza1.png", "alianza2.png", "alianza3.png"],
        },
        {
          titulo: "Proveedores",
          subtitulo: "Nuestros proveedores garantizan la excelencia:",
          logos: ["proveedor1.png", "proveedor2.png", "proveedor3.png"],
        },
        {
          titulo: "Clientes",
          subtitulo: "Colaboramos con clientes que comparten nuestra visión:",
          logos: ["cliente1.png", "cliente2.png", "cliente3.png"],
        },
      ].map((seccion, index) => (
        <Row className="seccion mt-5" key={index}>
          <Col className="text-center">
            <h3>{seccion.titulo}</h3>
            <p>{seccion.subtitulo}</p>
          </Col>
          <Row className="logos-row d-flex justify-content-center">
            {seccion.logos.map((logo, idx) => (
              <Col
                xs={6}
                md={3}
                key={idx}
                className="mb-4 d-flex justify-content-center"
              >
                <Image
                  src={`../images/logos/${logo}`}
                  className="logo-imagen"
                />
              </Col>
            ))}
          </Row>
        </Row>
      ))}
    </Container>
  );
};

export default Nosotros;
