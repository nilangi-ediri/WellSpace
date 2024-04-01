import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                {/* Assuming WellSpace is your brand, replace the href with your home route */}
                <Navbar.Brand href="#home">WellSpace</Navbar.Brand>
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
