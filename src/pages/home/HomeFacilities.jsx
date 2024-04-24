import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap'; // Import Container, Row, and Col from React Bootstrap
import './style.css';

function HomeFacilities() {
  const imagesFacilities = [
    {
      image: "./images/Annual Sports day/IMG_0433.jpg",
      title: "Sports"
    },
    {
      image: "./images/Annual Sports day/IMG_0040.jpg",
      title: "Scouts and Guides"
    },
    {
      image: "./images/Yaga day/IMG_0903.jpg",
      title: "Yoga"
    },
    {
      image: "./images/DSC_5985.png",
      title: "Annual Function"
    },
    {
      image: "./images/Sports independance day cup/sports2.jpeg",
      title: "Inter School Competition"
    },
    {
      image: "./images/Drawings _Canvas Chronicles_/Rithvik K P 9B.jpg",
      title: "Drawing Competition"
    }
  ];

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
   <Card style={{border:"none"}}>
    <CardBody>
    <Container  className='allfacilitiesback'> 
      <h2 className='faciliText'>FACILITIES</h2>
      <Row>
        <Col> {/* Add Col component to create responsive layout */}
          <motion.div className='carouselFacilities' ref={carousel} whileHover={{ cursor: "grab" }}>
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
              {imagesFacilities.map((image, index) => (
                <motion.div className='item' key={index}>
                  <div className='mainDivFaciliti'>
                    <img src={image.image} alt={`Facility ${index}`} className='imgFacility' />
                    <div className='overlapfaciText'>
                      <h2>{image.title}</h2>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </Container>
    </CardBody>
   </Card>
  );
}

export default HomeFacilities;
