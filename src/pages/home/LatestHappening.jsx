import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';

function LatestHappening() {
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        duration: 1000,
        offset: 300,
        once: true
      });
    };
  
    // Delay AOS initialization by a very short time
    const timeout = setTimeout(initAOS, 10);
  
    return () => clearTimeout(timeout);
  }, []);
  

  const events = [
    {
      title: "Republic Day",
      date: "January 26, 2024",
      image: "/images/Republic%20day/IMG_0019.jpg"
    },
    {
      title: "Independence Day",
      date: "August 15, 2023",
      image: "/images/Independance%20day/IMG_0100.jpg"
    },
    {
      title: "GK Mega quiz",
      date: "October 15, 2023",
      image: "/images/GK%20Mega%20quiz/IMG_0002.jpg"
    },
    {
      title: "JEE & NEET Exams",
      date: "March 15, 2023",
      image: "/images/jeeneet/IMG_0644.jpg"
    },
    {
      title: "Telescope",
      date: "November 24, 2023",
      image: "/images/Telescope/IMG_0227.jpg"
    },
    {
      title: "Christmas Event",
      date: "December 25, 2023",
      image: "/images/Christmas/IMG_0045.jpg"
    }
  ];

  return (
   <Card style={{border:"none"}}>
    <CardBody>
    <Container className='mt-5 mb-5'>
      <section className="wrapperLatestHappen mb-5">
        <div className="container">
          <div className="row">
            <div className="col text-center mb-5 mt-5">
              <h2 className='mt-5'>LATEST HAPPENING EVENTS</h2>
              <p className="lead"></p>
            </div>
          </div>
          <Row className="justify-content-center">
            {events.map((event, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                <Card
                  className="text-dark card-has-bg click-col cardFacility"
                  style={{ backgroundImage: `url(${event.image})` }}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <Card.Img src={event.image} alt={event.title} className="d-none" />
                  <div className="card-img-overlay d-flex flex-column">
                    <Card.Body>
                      <h4 className="card-title mt-0"><a className="text-dark" href="https://creativemanner.com">{event.title}</a></h4>
                      <small><i className="far fa-clock cardDate"></i> {event.date}</small>
                    </Card.Body>
                    <Card.Footer>
                      <div className="media">
                        <img className="mr-3 rounded-circle" src="/images/fater.png" alt="Generic placeholder" style={{ maxWidth: "50px" }} />
                        <div className="media-body">
                          <h6 className="my-0 text-light d-block ">St John Bosco</h6>
                          <small style={{fontWeight:"700"}}>Director of DonBosCo</small>
                        </div>
                      </div>
                    </Card.Footer>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </Container>
    </CardBody>
   </Card>
  );
}

export default LatestHappening;