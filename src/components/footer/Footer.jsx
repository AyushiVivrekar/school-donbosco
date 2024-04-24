import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
import './footer.css'


function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <h5>Address</h5>
            <p>
            P.B.NO.64, NH-4 Road, Kelagote, Chitradurga-577501
            </p>
          </Col>
          <Col xs={12} md={5}>
            <h5>Contact Us</h5>
            <p>
              Email: dbciscechitradurga@gmail.com<br />
              Phone:+91 94489 35000
            </p>
          </Col>

<Col xs={12} md={2}>
    <div className="">
        <h5 className=" mb-3">Follow Us</h5>
        
        <div className='d-flex align-items-center mb-2'>
            <div className='me-3'>
                <FaFacebookSquare size={20} className='facebookIcon'/>
            </div>
            <div>
                <a href="#" className="text-decoration-none">Facebook</a>
            </div>
        </div>
        
        <div className='d-flex align-items-center mb-2'>
            <div className='me-3'>
                <FaTwitterSquare size={20} className='twitterIcon'/>
            </div>
            <div>
                <a href="#" className="text-decoration-none">Twitter</a>
            </div>
        </div>
        
        <div className='d-flex align-items-center mb-2'>
            <div className='me-3'>
                <FaInstagram size={20} className='instaIcon'/>
            </div>
            <div>
                <a href="#" className="text-decoration-none">Instagram</a>
            </div>
        </div>
    </div>
</Col>




        </Row>
        <hr />
        <Row>
          <Col xs={12}>
            <p className="text-center">&copy; 2024 AP SOFTWARES ALL RIGHTS RESERVED</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
