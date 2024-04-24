import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, CardBody, Card } from 'react-bootstrap';

function HomeCardSection() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 300
    });
  }, []);

  return (
    <Card style={{border:"none"}}>
      <CardBody>
      <section className='mt-5'>
        <h4 className='text-center cardHomeText'>CURRICULUM</h4>
     <Container >
      <Row className="justify-content-center">
        <Col md={6} sm={12} className="content-card" data-aos="fade-up">
          <div className="card-big-shadow">
            <div className="card card-just-text cardAll" data-background="color" data-color="green" data-radius="none">
              <div className="content">
                <h2 className="category" style={{fontSize:"18px", fontWeight:"800"}}>Primary</h2>
                {/* <h4 className="title"><a href="#">Note:</a></h4> */}
                <p className="description">Introducing students to higher learning concepts and fostering knowledge absorption are paramount goals in the III-V curriculum. Concurrently, we emphasize the development of robust academic practices and skill refinement. Our educational approach underscores practical learning, rooted in the belief that 'doing is the best way to learn.'</p>
              </div>
            </div>
          </div>
        </Col>

        <Col md={6} sm={12} className="content-card" data-aos="fade-down">
          <div className="card-big-shadow">
            <div className="card card-just-text cardAll" data-background="color" data-color="yellow" data-radius="none">
              <div className="content">
                <h2 className="category" style={{fontSize:"18px", fontWeight:"800"}}>Secondary</h2>
                {/* <h4 className="title"><a href="#">Note:</a></h4> */}
                <p className="description">The educational journey from classes VI to X is centered on broadening the frontiers of learning and cultivating a command over advanced concepts and skills. Furthermore, we integrate special competition preparations, offering our students elevated platforms to demonstrate their proficiencies.</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
   </section>
      </CardBody>
    </Card>
  );
}

export default HomeCardSection;
