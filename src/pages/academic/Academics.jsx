import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import './academic.css'

function Academics() {
  return (
    <>
      <div>
        <div className='backOverlapAcademic'>
          <div className='TextOverlapAcademic'>
            <h1><b style={{ textAlign: "center" }}>ACADEMICS</b></h1>
          </div>
          <div className='parallaxBookImg'></div>
        </div>

        <Container>
          <Row>
            <Card style={{ border: "none" }}>
              <CardBody>
                <div >
                  <div className='row'>
                    <div className='col-md-1'>
                      <img src='/images/girlsImagAcademic.jpeg' width="70px" className='roll-in-blurred-left' />
                    </div>
                    <div className='col-md-11'><h5 className='text-center headingAcademic'>ACADEMICS ACHIEVEMENT</h5></div>
                  </div>
                  <h4 className='text-center mb-5'><b>Pursue the righteous path, not the path of least resistance.</b></h4>
                  <div className='mt-5 academic-paragraph' >
                    <p>Academic excellence is the heart of our educational mission. We take great pride in the outstanding achievements of our students, from our youngest learners in Lower Kindergarten (LKG) to our accomplished scholars in Secondary (X).</p>

                    <p>Their exemplary performances across all grade levels reflect their unwavering dedication, intellectual curiosity, and relentless pursuit of personal and academic growth. We are honored to share the details of these commendable accomplishments, which demonstrate our students' ability to unlock their full potential and emerge as leaders in their respective fields.</p>
                  </div>

                </div>
              </CardBody>
            </Card>
          </Row>
        </Container>
        <div className='backOverlapAcademic'>
          <div className='TextOverlapAcademic'>
            <Row>
              {/* <Col md={4}>
                <div className='card'>
                  <div className='card-body'></div>
                </div>
              </Col>
              <Col md={4}>
                <div className='card'>
                  <div className='card-body'></div>
                </div>
              </Col>
              <Col md={4}>
                <div className='card'>
                  <div className='card-body'></div>
                </div></Col> */}
                <p style={{color:"orange", fontSize:"12px"}}><b>THE QUALITY OF YOUR THINKING, DETERMINES THE QUALITY OF YOUR MIND</b></p>
            </Row>
          </div>
          <div className='parallaxBookImg'></div>
        </div>
      </div>

    </>
  )
}

export default Academics