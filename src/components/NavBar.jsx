import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../images/logo.png'

const NavBar = () => {
    return (
        <>
        <Container>
        <Navbar collapseOnSelect expand="lg" variant='light' >
        <Navbar.Brand href="#home">
            <img src={logo} style={{width : '100px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
            <Nav className="ml-auto nav-color">
            <Nav.Link href="#deets">Job Seekers</Nav.Link>
            <Nav.Link href="#deets">Mentors</Nav.Link>
            <Nav.Link href="#deets">For Companies</Nav.Link>
            <Nav.Link href="#deets">Accounts</Nav.Link>
            <Nav.Link href="#deets">Bypass</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </Container>
        </>
    )
}

export default NavBar