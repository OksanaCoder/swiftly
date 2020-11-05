import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import back from '../images/back.png'
import NavBar from './NavBar'
import Typed from 'react-typed';
import { render } from 'react-dom';



class Welcome extends Component  {
    render() {

    return(
        <>
        <div className='welcome'>
            <NavBar />
            <Container>
                <Row style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '80px'}}>
                    <Col lg={6} md={6} sm={12}>
                    <h1 style={{fontSize: '60px', fontWeight: '800'}}>Swiftly.
              <Typed
                strings={[
                    'Learn',
                    'Mentor',
                    'Hire']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    style={{color: '#EB3F3F', fontSize: '60px', fontWeight: '600'}}
                    >
                </Typed>
                </h1>
                        <h2 style={{letterSpacing: '3px', marginTop: '20px'}}>World's 1st E-ID verified</h2>
                        <h2 style={{ color: '#1E1E1E', margin: '20px 0 20px', fontSize: '23px'}}>Live Learning and Automated Recruiting platform</h2>
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
}

export default Welcome