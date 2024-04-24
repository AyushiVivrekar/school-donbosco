import React from 'react'
import './gallery.css'
import { Container, Row, Col, CardImg, CardImgOverlay, CardText, Card, CardTitle, Carousel } from 'react-bootstrap'
import { AOS } from 'aos';
import Navbarr from '../../components/Navbar/Navbarr';
import { facilities } from '../../schoolData';
import FooterSecond from '../../components/FooterSecond/FooterSecond'

function Gallery() {
  return (
    <>
      <section>
        <div className='gallerytextOverlapping'>
          <div className='galleryContentOverlap'>
            <h2><b style={{ textAlign: "center" }}>EXTRA - CURICULAR ACTIVITIES</b></h2>
          </div>

          <div className='backgroundImgGallery'></div>
        </div>
        <div className='galleryContainer'>
          <Container >
            <Row xs={1} md={2} lg={3} className="g-4">
              {facilities.length > 0 ?
                facilities.map((person) => (
                  <Col key={person.id} data-aos="zoom-in" className='mb-5 mt-5'>
                    <Card className="gallery-card h-100">
                      <Carousel fade interval={3000}>
                        {Array.isArray(person.images) && person.images.map((image, index) => (
                          <Carousel.Item key={index}>
                            <img
                              className="d-block w-100 justify-content-center" height={300}
                              src={image}
                              alt={`Slide ${index}`}
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                      <Card.Body>
                        <Card.Title className='galleryCardTitle'><b>{person.name}</b></Card.Title>
                        {/* <p style={{color:"gray"}}>{person.description}</p> */}
                      </Card.Body>
                    </Card>
                  </Col>
                )) : null}

            </Row>
          </Container>
        </div>
        <div className='gallerytextOverlapping'>
          <h5 className='lineOverlap'>
            "The grand voyage spanning a thousand miles unfolds from the humblest of steps."</h5>
          <div className='backgroundImg2Gallery'></div>
        </div>

      </section>
    </>
  )
}

export default Gallery