import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light">
            <Container>
                {/* Assuming WellSpace is your brand, replace the href with your home route */}
                <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src="/images/Logo.jpg"
                        width="30" // Increase width as needed
                        height="30" // Increase height as needed
                        className="d-inline-block align-top mr-3"
                        alt="WellSpace Logo"
                        style={{ marginRight: '10px' }} // Adjust the right margin as needed
                    />
                    WellSpace
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* Replace hrefs with actual paths */}
                        <Nav.Link href="#learn">Learn About Mental Health</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#blog">Blog and Discussion</Nav.Link>
                        <Nav.Link href="#challenges">Challenges</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                        {/* Update href to your login page route */}
                        <Nav.Link href="#login">Log In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
