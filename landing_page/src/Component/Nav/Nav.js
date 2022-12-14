import React from 'react';
import {Navbar, Container, Nav } from 'react-bootstrap';
import './Nav.css';

const Navs = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home/gamal/ROME_1/landing_page/src/Component/Home/Home.js">ROME</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home/gamal/ROME_1/landing_page/src/Component/Home/Home.js" className='first'>Home</Nav.Link>
                        <Nav.Link href='/home/gamal/ROME_1/landing_page/src/Component/Home/Features/Features.js'>Features</Nav.Link>
                        <Nav.Link href="/home/gamal/ROME_1/landing_page/src/Component/Home/About/About.js">About</Nav.Link>
                        <Nav.Link href="/home/gamal/ROME_1/landing_page/src/Component/Home/Contact/Contact.js">Contact</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}

export default Navs;