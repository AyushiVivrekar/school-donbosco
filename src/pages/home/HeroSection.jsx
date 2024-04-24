import React from 'react';
import { Row, Col, Carousel, Container } from 'react-bootstrap';
import './style.css';

export default function HeroSection() {
  const images = [
    "/images/image slider/1.png",
    "/images/image slider/2.png",
    "/images/image slider/3.png",
  ];

  return (
    <>
      <div className='' >
        <div className=''>
          <Row>
            <Col>
              <Carousel fade interval={6000} pause={false} className='image-container'>
                {images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img src={image} alt={`Image ${index + 1}`} className='imageCarousel' />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </div>
        <marquee className="text-dark" style={{ fontSize: "1.3vw" }}>
          <span style={{ color: '#4CAF50' }}>User</span>{' '}
          <span style={{ color: '#FF5733', textDecoration: 'underline' }}>
            Click here for online admissions 2024-25
          </span>.{' '}
          <span style={{ backgroundColor: '#FFC300', padding: '3px 10px', borderRadius: '5px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
            LKG to 9th & 11th grades
          </span>.
        </marquee>
      </div>
    </>
  );
}
