import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import back from '../images/back.png'
import NavBar from './NavBar'
import Typed from 'typed.js';



const Welcome = () => {
    var options = {
        strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
        typeSpeed: 40
      };
      var typed = new Typed('.element', options);
    return(
        <>
        <div className='welcome'>
            <NavBar />
            <Container>
                <Row style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '80px'}}>
                    <Col lg={6} md={6} sm={12}>
                        <h2 style={{letterSpacing: '3px'}}>{typed}World's 1st E-ID verified</h2>
                        <h1 style={{color: '#1E1E1E', fontWeight: '800'}}>Live Learning and Automated Recruiting platform</h1>
                        <h6 style={{color: '#8B8E92', fontSize: '20px', marginTop: '20px', marginBottom: '20px'}}>Post jobs, review applications, schedule interviews
and hire, all at one place.</h6>
                        <Button className='btn-main'>How it works
                        
                        </Button>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                       <img src={back} style={{width: '100%'}}/>
                    </Col>
                </Row>
                
            </Container>
        </div>
        </>
        
    )
}

export default Welcome