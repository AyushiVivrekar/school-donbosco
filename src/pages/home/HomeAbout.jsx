import React from 'react';
import AOS from 'aos';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import './style.css';

AOS.init({
  duration: 1000,
  offset: 300
});

function HomeAbout() {
  return (
  <Card style={{border:"none"}}>
    <CardBody>
    <div className='about-section'>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="aboutdescription" data-aos="fade-left">
              <h2>WHY DON BOSCO ICSE SCHOOL IS THE BEST SOLUTION FOR EDUCATION</h2>
              <p>
                Don Bosco ICSE School is a non-elitist institution that firmly affirms its commitment to serving the most needy youth. Our school aims to blend work and study with artistic, recreational, cultural, value-based, and social activities. We adopt the latest educational innovations to help our students stay abreast of cultural and technological progress in the contemporary world. In collaboration with other schools in the country, Don Bosco School strives to realize the ideals of a complete education as epitomized by many sages of our homeland.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="image-wrapper" data-aos="fade-right">
              <img 
                src='/images/jeeneet/IMG_0653.jpg' 
                alt="School" 
                className="img-fluid" 
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </CardBody>
  </Card>
  );
}

export default HomeAbout;
