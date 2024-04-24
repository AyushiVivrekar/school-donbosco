import React from 'react';
import { Navbar, Nav,  Container } from 'react-bootstrap';
import './navbarr.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbarr() {
  return (
    <div className="sticky-top-navbar">
      <Navbar  expand="lg" variant="dark" sticky="top" className="navbarr">
        <Container>
          <Navbar.Brand as={Link} to='/home'>
            <img src="/images/schoolLogo.png" alt="School Logo" height={40} width={50} className="rotate-scale-up me-4" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/home'>HOME</Nav.Link>
              <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
              <Nav.Link as={Link} to="/admission">ADMISSION</Nav.Link>
              <Nav.Link as={Link} to="/academics">ACADEMICS</Nav.Link>
              <Nav.Link as={Link} to="/gallery">GALLERY</Nav.Link>
              <Nav.Link as={Link} to="/facilitiesPage">FACILITIES</Nav.Link>
              <Nav.Link as={Link} to="/contactus">CONTACT US</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#login">LOGIN</Nav.Link>
              <Nav.Link href="#signup">SIGNUP</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;