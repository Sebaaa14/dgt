import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo/logo.png";
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (direccion) => {
    navigate(`/${direccion}`);
  };
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            width="200"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            <Nav.Link href="inicio">Inicio</Nav.Link>
            <Nav.Link href="proyectos">Proyectos</Nav.Link>
            <Nav.Link href="acerca">Nosotros</Nav.Link>
            <Nav.Link href="contactos">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            <Nav.Link onClick={() => handleNavigate("inicio")}>Inicio</Nav.Link>
            <Nav.Link onClick={() => handleNavigate("proyectos")}>
              Proyectos
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigate("acerca")}>
              Nosotros
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigate("contactos")}>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
