import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavigationBar = () => {
    // Example user data - you would typically fetch this from your app's user authentication state
    const user = {
        isLoggedIn: true,
        profilePicture: 'https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_640.jpg'
    };

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src="/images/Logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="WellSpace Logo"
                        style={{ marginRight: '10px' }}
                    />
                    WellSpace
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/info">Learn About Mental Health</Nav.Link>
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="/blog">Blog & Discussion</Nav.Link>
                        <Nav.Link href="#challenges">Challenges</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="dark" style={{ height: '30px', fontSize: '12px', marginTop: '9px', padding: '5px 10px' }} onClick={() => window.location.href = '/sign-up'}>
                            Sign up
                        </Button>
                        <Nav.Link style={{ height: '30px', fontSize: '12px', marginTop: '9px', padding: '5px 10px' }} href="/login">Log In</Nav.Link>
                        {user.isLoggedIn && (
                            <Nav.Link href="/user-profile">
                                <img
                                    src={user.profilePicture}
                                    width="30"
                                    height="30"
                                    className="rounded-circle"
                                    alt="User Profile"
                                />
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
