import React from "react";
import { Carousel, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/proyectos.css";

const Proyectos = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/proyecto/${projectId}`);
  };

  const goToContactPage = () => {
    navigate("/contactos");
  };

  return (
    <div>
      <Container className="mt-5 test">
        <Carousel>
          <Carousel.Item onClick={() => handleProjectClick("proyectoA")}>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x300?text=Proyecto+A"
              alt="Proyecto A"
            />
            <Carousel.Caption>
              <h3>Proyecto A</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item onClick={() => handleProjectClick("proyectoB")}>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x300?text=Proyecto+B"
              alt="Proyecto B"
            />
            <Carousel.Caption>
              <h3>Proyecto B</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item onClick={() => handleProjectClick("proyectoC")}>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x300?text=Proyecto+C"
              alt="Proyecto C"
            />
            <Carousel.Caption>
              <h3>Proyecto C</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item onClick={() => handleProjectClick("proyectoD")}>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x300?text=Proyecto+D"
              alt="Proyecto D"
            />
            <Carousel.Caption>
              <h3>Proyecto D</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <div className="banner-container mt-5">
        <h2>¿Tienes alguna consulta? ¡Contáctanos!</h2>
        <Button variant="primary" onClick={goToContactPage}>
          Ir a Contacto
        </Button>
      </div>
    </div>
  );
};

export default Proyectos;
