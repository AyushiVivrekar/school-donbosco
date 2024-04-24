import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import './about.css';

function AboutUs() {
  return (
    <>
      <section className="py-3 py-md-5 py-xl-8">
        <Card style={{ border: "none" }}>
          <CardBody>
            <Container>
              <Row>
                <Col md={6}>
                  <h1 className="aboutDonBosCoTitle mb-5 ">ABOUT DON BOSCO</h1>
                  <h5 className="mb-3"><b>SAINT JOHN BOSCO – THE FATHER & FRIEND OF YOUTH</b></h5>
                  <div className="mb-4 boscoaboutText">
                    <p className=''>John Bosco was born on the 16th of August 1815, in Becchi, a hamlet belonging to the municipality of Castelnuovo d'Asti (today Castelnuovo Don Bosco) in Turin, Italy. He came from a family of poor fainters. He lost his father. Francesco, at the age of two but he drew strength from his mother Margherita's deep faith in God. At the age nine, he had a prophetic dream in which a number of unruly young boys were uttering words of blasphemy. Jesus Christ and the Virgin Mary appeared to John in the dream, saying he would bring such youths to God through the virtues of humility and charity. Later on, this dream would help John to discern his calling as a priest. John's older brother Anthony opposed his plan to be a priest, and antagonized him so much that he left home to become a farm worker at age 12. After moving back home three years later. John worked in various trades and finished school in order to attend seminary.</p>
                  </div>
                </Col>
                <Col md={6}>
                  <img src='/images/jhonfather.jpg' className='fatherImg' />
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <p className="mt-3 boscoaboutText">In 1841, John Bosco was ordained a priest. From that time. John was known as "Don" Bosco, a traditional Italian title of honour for priests. In the city of Turin. he began ministering to boys and young men who lived on the streets, many of whom were without work or education. He was determined to save as many young people as he could from a life of degradation. He established a group known as the Oratory of St. Francis de Sales, and became a spiritual father to boys in need. His aging mother helped and supported the project in its early years. He became a spiritual guide and provider along with his fellow Salesian priests and brothers. giving boys religious instruction, lodging, education, and work opportunities. He also helped Saint Mary Dominic Mazzarello to form a similar group for girls. St. John Bosco died in the early hours of January 31,1888, after conveying a message: 'Tell the boys that I shall be waiting for them all in Paradise." He was canonized on Easter Sunday of 1934, and was declared the patron saint of young people, apprentices. and catholic publishers and editors.</p>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>

        {/* <Container fluid> */}
        <Row>
          <Col md={12}>
            <h2 className="text-center historyText">A BRIEF HISTORY OF THE SCHOOL</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="schoolaboutcontainer">
              {/* <img src="/images/New%20folder/New%20folder/building%20photos/new%20dbicse%20image.png" alt="Notebook" className="img-fluid" /> */}
              <div className="aboutHistorycontent">
                <p>Don Bosco School, ICSE syllabus, Chitradurga, started in 1998 is run by the Salesians of Don Bosco (The Salesian Society). It Is a Christian Minority School with all the privileges that accrue from such status. </p>
                <p>The aim of the school is to impart a sound education through a wide training which will shape the character and develop personality and draw out the best in every pupil. The method of education followed in the school is the Preventive System taught and practised by Don Bosco. It is based on Reason. Religion and Loving Kindness. Within a short span of time, the School has proved its caliber both In curricular and co-curricular activities. </p>
                <p>The school has been granted permanent affiliation from the Council for the Indian School Certificate Examinations (CISCE), </p>
                <p>New Delhi. in 2013 (The School Code Is KA-144). In the year 2015 the school received ISO: 9001-2015 certification for excellence in overall academic and co-Curricular excellence. The Salesian Society continues to operate worldwide. At present It has more than 16,000 members in 2.711 houses serving in 132 countries. It is the third-largest missionary organization in the world.</p>
              </div>
              <div className='aboutHistoryImgeParallax'></div>
            </div>
          </Col>
        </Row>
        {/* </Container> */}
        <div style={{ margin: "4% 0px 10% 0px" }}>
          <Container >
            <Row>
              <Col lg={6}>
                <div className="card p-3  visionCard" style={{ height: "95%" }}>
                  <h2 className="card-title mb-3 visionTitle">VISION OF THE SCHOOL </h2>
                  <div className="card-body p-0">
                    <p className="card-text visionText">The vision of our school is to Impart a sound education through a wide training which will shape the character and develop personality and draw Out the best in every pupil. Ink. provide preventive system of education based on reason. religion and kindness.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="card p-3 qualityCard" style={{ height: "95%" }}>
                  <h2 className="card-title mb-3 qualityTitle">QUALITY POLICY OF OUR SCHOOL </h2>
                  <div className="card-body p-0">
                    <p className="card-text lead qualityText">We are committed to provide quality education in accordance with the modern vends, achieving the wholesome development of each of our students, especially academic excellence, enrichment of moral values and social commitment through curricular. co-curricular and extracurricular activities with regular and systematic planning and evaluation methods.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Card style={{ border: "none" }}>
          <CardBody>
            <Container>
              <Row>
                <Col md={12}>
                  <h2 className='mt-5 mb-5 principalTitle'>PRINCIPAL'S MESSAGE </h2>
                  <div className='principalText'>
                    <p>A school plays a crucial role in shaping a child’s future. Not only does this include the provision of education and ensuring learning, but moulding the character, morals, and value system of the child as well. A school provides the foundation needed to view the world as a limitless space providing innumerable opportunities to shine.</p>
                    <p>We, at DON BOSCO ICSE, Chitradurga, strive to provide education that explores, challenges, and grooms every aspect of the child’s personality. While we are determined to provide seamless learning targeted towards excellent academic performance through the incorporation of the latest teaching approaches, we also ensure that we are actively working on the physical, social, emotional, and spiritual training of our children. We believe that all children can learn and commit to nurturing the potential in each child. We focus on contextual learning based on a constructivist theory of teaching & learning to provide techniques such as problem-solving, learning by doing & inquiry-based learning activities. Our teachers help students to test their ideas, draw conclusions & inferences in a collaborative learning environment which transforms the students to become active participants in the learning process.</p>
                    <p>Our teachers are professionally equipped to develop adapt and modify curriculum content, pedagogy & assessment which suit the needs and aspirations of our students. We work towards a holistic, experiential, integrated, student-cantered educational system that helps to improve the creativity, critical thinking, and problem-solving skills of our young learners to equip them for the ever-changing employment dynamics and global ecosystems. We educate our children to change the world through peace, empathy, and fraternity and place great emphasis on inner values</p>
                    <p>Our sincere gratitude to all the DON BOSCO ICSE Chitradurga i.e. the management, staff, parents, and students for keeping your trust and belief in the school. We will continue with the spirit of inculcating ethics & ethos in young minds with aplomb and dedication even during this tough time.</p>
                    <p>We look forward to working together to support every child to fulfil the school motto: “Service Before Self”. Wishing all our children a happy and successful journey of learning!</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </section>
    </>
  );
}

export default AboutUs;
