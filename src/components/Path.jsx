import React, { Component, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img from '../images/icon-2.jpg'
import winner from '../images/choice.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import search from '../images/logo-icon.png'



const Path = () => {
    useEffect( () => {
        AOS.init();
    }, [])
    return (
        <div className='path-back'>
          <Container>
              <Row className='head-2'>
                  <Col style={{display: 'flex', justifyContent:'center', alignContent: 'center'}}> 
                  {/* <img src={search} style={{width: '50px'}}/> */}
                    <h2 className='head-2'>How Does It Work ?</h2></Col>
              </Row>
          
              <Row style={{textAlign:'center'}}>
                  
                  <Col lg={2} md={3} sm={12} > 
                    <img src={img} className='icon-map' data-aos="fade-down-left" data-aos-duration="1000"/>
                    <h6> Login with Social security number</h6>
                  </Col>
                  <Col lg={2} md={3} sm={12} style={{marginTop: '50px'}}> 
                    <img src={img} className='icon-map' data-aos="fade-down-left" data-aos-duration="2000"/>
                    <h6> Fill profile once</h6>
                  </Col>
                  <Col lg={2} md={3} sm={12} style={{marginTop: '100px'}}> 
                    <img src={img} className='icon-map' data-aos="fade-down-left" data-aos-duration="3000"/>
                    <h6> Give tests</h6>
                  </Col>
                  <Col lg={2} md={3} sm={12} style={{marginTop: '150px'}}> 
                    <img src={img} className='icon-map' data-aos="fade-down-left" data-aos-duration="4000"/>
                    <h6> Let AI find jobs for you</h6>
                  </Col>
                  <Col lg={2} md={3} sm={12} style={{marginTop: '200px'}}> 
                    <img src={img} className='icon-map' data-aos="fade-down-left" data-aos-duration="2000"/>
                    <h6> Get feedback on Job applications</h6>
                  </Col>
                  <Col lg={2} md={3} sm={12} style={{marginTop: '250px', marginBottom: '50px'}}> 
                    <img src={img} className='icon-map' data-aos="fade-down-left" data-aos-duration="2000"/>
                    <h6> Learn Courses based on feedback</h6>
                  </Col>
              </Row>
              <Row>
                  <Col lg={12} md={12} sm={12} style={{textAlign: 'right'}}>
                      <img src={winner} style={{width: '250px'}}/>
                  </Col>
              </Row>
          </Container>
        </div>
    )
}

export default Path