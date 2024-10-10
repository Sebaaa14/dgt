import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row className="footer-content">
          <Col xs={12} md={6}>
            <p>
              &copy; {new Date().getFullYear()} Data Guard Technologies. Todos
              los derechos reservados.
            </p>
          </Col>
          <Col xs={12} md={6} className="footer-links">
            <a href="/inicio">Inicio</a>
            <a href="/contactos">Contacto</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
