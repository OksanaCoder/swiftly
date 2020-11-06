import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../images/logo.png'


const NavBar = () => {
    return (
        <div >

        <Navbar collapseOnSelect expand="lg" variant='light' fixed="top" style={{ background: '#fff'}} >
        <Container >
        <Navbar.Brand href="#home">
            <img src={logo} style={{width : '100px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
            <Nav className="ml-auto nav-color">
            <Nav.Link href="#features">Job Seekers</Nav.Link>
            <Nav.Link href="#featuresMentor">Mentors</Nav.Link>
            <Nav.Link href="#featuresCompany">For Companies</Nav.Link>
            <Nav.Link href="#accounts">Accounts</Nav.Link>
            <Nav.Link href="#bypass">Bypass</Nav.Link>
            </Nav>
        
        </Navbar.Collapse>
        </Container >
        </Navbar>

        </div>
    )
}

export default NavBar