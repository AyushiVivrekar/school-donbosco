import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import './style.css';

const AdmissionEnquiryForm = () => {
  return (
    <div className="background-wrapper">
      
      <img className="background-image" src="/images/DB feast/drawing.jpeg" alt="Background" />
   
      <div className="overlay"></div>
      
      <Container fluid className="content-container mt-5">
      <h2 className="text-white text-center">Admission Enquiry</h2>
        <Row className="justify-content-left">
          <Col xs={12} sm={8} md={6}>
            <div className="bodyAll">
              <div id="wrap">
               
                <br />
                <div id="form-wrap">
                  
                <Form name="" contact-demo method="POST" action="" className="justify-content-left admissionForm">
                    <div className='card' style={{border:"none"}}>
                    <div className='card-body'>
                    <h6 className="text-dark text-center mb-4">Admission Enquiry</h6>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" name="name" id="name" placeholder="Name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="email" name="email" id="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="tel" name="phone" id="phone" placeholder="Phone" maxLength={10} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" name="message" id="message" placeholder="Your Message" rows={3} />
                  </Form.Group>
                  <input type="hidden" name="_next" />
                  <Button type="submit" className="submitbtn">Click me to connect</Button>                  
                    </div>
                  </div>
                  </Form>
                  
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdmissionEnquiryForm;
