import React from 'react';
import CartWidget from './CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css';
import logo from "../../img/logo.svg"



const NavBar = () => {
    
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <a className="navbar-brand" href="www.google.com">
                <img src={logo} alt="logo" />
            </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Reservas</Nav.Link>
            <NavDropdown title="Carta" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Entradas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Fondos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Postres</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Agregados</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
    );
}



export default NavBar