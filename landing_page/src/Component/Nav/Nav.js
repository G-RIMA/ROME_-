import React from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
import './Nav.css';

const Navs = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">ROME</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='first'>Home</Nav.Link>
                        <Nav.Link href='#Features'>Features</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href='#team'>Team</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}

export default Navs;