import React, { useState, useEffect } from 'react';
import { Modal, Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './schoolAdmisspopup.css';

function SchoolAdmissionPopup() {
    const schoolImg = "/images/New%20folder/New%20folder/building%20photos/new%20dbicse%20image.png";
    const schoolLogo = "/images/schoolLogo.png";

    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)} className='schoolAdmissi-Modal'>
                <Modal.Header closeButton className='rotate-in-2-cw'>
                    <Modal.Title className='school-title'>DON BOSCO ICSE, Chitradurga</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modal-body'>
                    <Card className='schoolAdmissPopup-card'>
                        <Card.Img variant="top" src={schoolImg} />
                        <Card.Body>
                            <Row className="justify-content-center align-items-center">
                                <Col xs="auto">
                                    <img src={schoolLogo} alt="School Logo" className="school-logo" width={80}/>
                                </Col>
                            </Row>
                            <Card.Text>
                                <h2 className='text-center text-focus-in'>Admission Open</h2>
                                <h4 className='text-center'>2024-2025</h4>
                                <div className='text-center'>
                                    {/* <Button className='classes-btn'>For Classes LKG To STD IX & XI </Button> */}
                                </div>
                                <h6 className='text-center mt-3 mb-3'><marquee>Unlock Your Potential Today!</marquee></h6>
                                <div className='text-center'>
                                    <Button className='applyOnline-btn'>Apply Online</Button>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default SchoolAdmissionPopup;
