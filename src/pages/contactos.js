import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/contactos.css";

const contactos = () => {
  return (
    <div className="full-page-background">
      <Container
        fluid
        className="d-flex justify-content-center align-items-center min-vh-100"
      >
        <Row className="contact-container">
          <Col md={6} className="contact-info py-20">
            <h1>¿Necesitas hablar con nosotros? ¡Contáctanos!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eu enim rhoncus ipsum pulvinar gravida. Proin et tempus tortor.
              Morbi aliquet, lorem ac volutpat luctus, tellus quam viverra ante,
              quis luctus mi lacus sit amet est. Curabitur id sollicitudin est.
              Quisque tempor nisl eu dui pellentesque, eget molestie est
              porttitor.
            </p>
          </Col>
          <Col md={6}>
            <Form className="contact-form">
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formName" className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="Nombre"
                      className="input-field"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formEmail" className="mb-2">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="input-field"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formCompany" className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="Empresa"
                      className="input-field"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formPhone" className="mb-2">
                    <Form.Control
                      type="tel"
                      placeholder="Teléfono"
                      className="input-field"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="formMessage">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Mensaje"
                  className="message-field"
                />
              </Form.Group>
              <Button type="submit" className="submit-button mt-3" block>
                Contactar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default contactos;
