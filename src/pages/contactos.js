import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/contactos.css";

const Contactos = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("¡Formulario de contacto enviado con éxito!");
    navigate("/inicio");
  };

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
              Estamos aquí para resolver tus inquietudes y ayudarte con lo que
              necesites. Ya sea que tengas preguntas sobre nuestros proyectos,
              quieras conocer más sobre nuestros servicios o simplemente quieras
              establecer una colaboración, no dudes en comunicarte con nosotros.
              Completa el formulario y nos pondremos en contacto contigo lo
              antes posible.
            </p>
          </Col>
          <Col md={6}>
            <Form className="contact-form" onSubmit={handleSubmit}>
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

export default Contactos;
