import React from "react";
import { Carousel, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/proyectos.css";
import illapelImage from "../images/proyectos/illapel.png";
import abvImage from "../images/proyectos/abv.jpg";

const Proyectos = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/proyecto/${projectId}`);
  };

  const goToContactPage = () => {
    navigate("/contactos");
  };

  return (
    <div className="test2">
      <Container className="pt-5 test">
        <h2 className="text-center mb-4">
          Algunos de los proyectos que hemos realizado en el tiempo:
        </h2>
        <Carousel>
          <Carousel.Item onClick={() => handleProjectClick("proyectoA")}>
            <img
              className="d-block w-100 carousel-img"
              src={illapelImage}
              alt="Servicios Integrales Illapel"
            />
            <Carousel.Caption className="carousel-caption">
              <h3>Servicios Integrales Illapel</h3>
              <p>TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item onClick={() => handleProjectClick("proyectoB")}>
            <img
              className="d-block w-100 carousel-img"
              src={abvImage}
              alt="Sistema de gestión de ingresos y egresos para ABV (SIEABV)"
            />
            <Carousel.Caption>
              <h3>
                Sistema de gestión de ingresos y egresos para ABV (SIEABV)
              </h3>
              <p>TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item onClick={() => handleProjectClick("proyectoC")}>
            <img
              className="d-block w-100 carousel-img"
              src="https://via.placeholder.com/800x300?text=Proyecto+C"
              alt="Proyecto C"
            />
            <Carousel.Caption>
              <h3>Proyecto C</h3>
              <p>TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item onClick={() => handleProjectClick("proyectoD")}>
            <img
              className="d-block w-100 carousel-img"
              src="https://via.placeholder.com/800x300?text=Proyecto+D"
              alt="Proyecto D"
            />
            <Carousel.Caption>
              <h3>Proyecto D</h3>
              <p>TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST</p>
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
