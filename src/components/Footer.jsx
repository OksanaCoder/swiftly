import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div style={{background: '#182538', color: '#8E9195'}}>
            <Container>
                <Row className='pt-5'>
                  
                    <Col lg={12} md={12} sm={12} style={{textAlign: 'right'}}>
                        
                             <FontAwesomeIcon icon={faFacebook}/>
                             <FontAwesomeIcon className='ml-4' icon={faTwitter} />
                             <FontAwesomeIcon className='ml-4' icon={faGoogle} />
                         
                    </Col>
                </Row>
                <Row className='pb-3 pt-4'>
                    <Col lg={8} md={8} sm={12}>© Swiftly</Col>
                    <Col lg={4} md={4} sm={12}>
                        <ul className='list-unstyled' style={{display: 'flex', justifyContent: 'space-between'}}>
                            <li>Contact</li>
                            <li>About us</li>
                            <li>FAQ's</li>
                            <li>Support</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer