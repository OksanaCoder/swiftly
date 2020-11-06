import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div style={{background: '#000', color: '#fff'}}>
            <Container>
                <Row style={{ padding: '50px' }}>
                    <Col lg={6} md={6} sm={12}>© Swiftly</Col>
                    <Col lg={6} md={6} sm={12} style={{textAlign: 'right'}}>
                        
                             <FontAwesomeIcon icon={faFacebook} style={{color: '#fff'}}/>
                             <FontAwesomeIcon className='ml-4' icon={faTwitter} />
                             <FontAwesomeIcon className='ml-4' icon={faGoogle} />
                         
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer