import React, { useState } from 'react';
import { Navbar, Nav, Container, Row, Col, Card, CardBody, Modal, Button, Form } from 'react-bootstrap';
import AOS from 'aos';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaUserShield } from 'react-icons/fa';
import './header.css';

AOS.init({
  duration: 2000,
  offset: 300
});

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
    AOS.init(); // Initialize AOS when the modal is shown
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal} animation={false} centered>
        <Modal.Header closeButton>
          <Modal.Title className='adminText'>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalAdmin'>
          <Form className='adminForm'>
            <Form.Group controlId="formBasicEmail">
              <Form.Label><b>Email address</b></Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label><b>Password</b></Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button type="submit" className='adminSubmit'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Rest of your component */}
      <Card style={{ border: "none" }}>
        {/* Card body */}
        <CardBody>
          <Container fluid className="p-0">
            <img src="/images/wave1.png" alt="Wave" id="waveImg" className='img-fluid'/>
          </Container>

          {/* Navbar */}
          <Navbar bg="" variant="" expand="lg">
            <Container>
              {/* Navbar content */}
              <Navbar.Brand></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto'></Nav>
                <Nav className="ml-auto justify-content-center"> {/* Center Aligns */}
                  <Nav.Link href="#phone"><FaPhone className='shake-lr' color='green' /> <span className='schoolPhone'>+91 94489 35000</span></Nav.Link>
                  <Nav.Link href="#email"><FaEnvelope color='orange' className='jello-horizontal' /> <span className='schoolEmail'>dbciscechitradurga@gmail.com</span></Nav.Link>
                </Nav>
                <Nav className="ms-auto"> {/* Aligns to the right */}
                  <Nav.Link href="#login"> <FaUserShield size={30} color="red" onClick={handleShowModal}/></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* School info */}
          <Container>
            <Row>
              <Col xs={12} md={2} className="text-center mb-md-0">
                <img src="/images/schoolLogo.png" alt="School" width={100} height={100} />
              </Col>
              <Col xs={12} md={8} className="text-center">
                <div data-aos="fade-down">
                  <h1 className='schoolName'>DON BOSCO ICSE, Chitradurga</h1>
                </div>
                <div data-aos="fade-up">
                  <p className='schoolAddress'>P.B.NO.64, NH-4 Road, Kelagote, Chitradurga-577501</p>
                </div>
              </Col>
              <Col xs={12} md={2} className="text-center">
                <img src="/images/fater.png" alt="Father" className='donboscoFather' />
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </>
  );
};

export default Header;
