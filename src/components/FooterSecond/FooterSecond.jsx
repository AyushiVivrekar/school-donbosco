import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footersecond.css';

function FooterSecond() {
  return (
    <div className='background-footer sticky-bottom'>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col xs={10} sm={8} md={6}>
            <div className='second-footerText text-center'>
              <h6 className='tracking-in-expand'>"Begin Your Path to Future Success Today!"</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterSecond;
