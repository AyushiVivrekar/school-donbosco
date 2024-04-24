import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import './contactsection.css';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
    return (
        <>
            <section id="contact" className="contact">
                <div className='textOverlapping'>
                    <div className='contactTextOverlap'>
                        <h1><b style={{ textAlign: "center" }}>Contact Us</b></h1>
                    </div>
                    <div className='parllax'></div>
                </div>
                <Card className='pt-5' style={{border:"none"}}>
                    <CardBody>
                        <Container className=''>
                            <div className="section-title mb-5">
                                <Row>
                                    <Col md={5}>
                                        <div className='addressContact'>
                                            <h1 className='text-center'><FontAwesomeIcon icon={faLocationDot} className='addressIcon' /></h1>
                                            <h5>P.B.NO.64, NH-4 Road, Kelagote, Chitradurga-577501</h5>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className='emailContact'>
                                            <h1 className='text-center'><FontAwesomeIcon icon={faEnvelope} className='emailIcon' /></h1>
                                            <h5 className='text-center'>dbciscechitradurga@gmail.com</h5>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='phoneContact'>
                                            <h1 className='text-center'><FontAwesomeIcon icon={faPhone} className='phoneIcon' /></h1>
                                            <h5 className='text-center'>+91 94489 35000</h5></div>
                                    </Col>
                                </Row>
                            </div>
                            <Row className="align-items-stretch">
                                <Col lg={6} className="d-flex align-items-stretch" data-aos="fade-left">
                                    <div className="info">
                                        <div className="embed-responsive embed-responsive-16by9 mt-5 mb-5">
                                            <iframe
                                                className="embed-responsive-item"
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.2189282836735!2d76.4127998!3d14.2215323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba7500c69113ed%3A0x9f52f1c59060a4ed!2sDon%20Bosco%20School%20(state%20syllabus)%20%7C%7C%20K.H.B%20Colony%20%7C%7C%20Chithradurga!5e0!3m2!1sen!2sin!4v1648897080355!5m2!1sen!2sin"
                                                style={{ border: '0', width: '100%', height: '400px' }} // Adjust the height as desired
                                                allowFullScreen="yes"
                                                loading="lazy"
                                            ></iframe>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} className="mt-5 pt-5 mb-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-right">
                                    <Card style={{border:"none"}}>
                                        <CardBody>
                                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                        <div className="row">
                                            <div className="form-group col-md-6 mb-5">
                                                <input type="text" name="name" className="form-control contactNameInput" id="name" placeholder='Your Name' required />
                                            </div>
                                            <div className="form-group col-md-6 mb-5">
                                                <input type="email" className="form-control contactEmailInput" name="email" id="email" placeholder='Your Email' required />
                                            </div>
                                        </div>
                                        <div className="form-group mb-5">
                                            <input type="text" className="form-control contactSubjectInput" name="subject" id="subject" placeholder='Subject' required />
                                        </div>
                                        <div className="form-group mb-5">
                                            <textarea className="form-control contactMessageInput" name="message" rows="10" placeholder='Message' required></textarea>
                                        </div>
                                        <div className="my-3"></div>
                                        <div className="text-center"><button type="submit" className='contactSubmitBtn'>Send Message</button></div>
                                    </form>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </section>
        </>
    );
}

export default ContactSection;
