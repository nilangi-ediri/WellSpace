
import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import UserContext from '../contexts/UserContext';

const NavigationBar = () => {
    const { user, logout } = useContext(UserContext);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
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
                        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                    </Nav>
                    <Nav className="align-items-center">
                        {!user ? (
                            <>
                                <Button
                                    variant="dark"
                                    style={{ height: '30px', fontSize: '12px', marginTop: '9px', padding: '5px 10px' }}
                                    onClick={() => window.location.href = '/sign-up'}
                                >
                                    Sign up
                                </Button>
                                <Nav.Link style={{ height: '30px', fontSize: '12px', marginTop: '9px', padding: '5px 10px' }} href="/login">Log In</Nav.Link>
                            </>
                        ) : (
                            <Dropdown show={showDropdown} onToggle={handleToggleDropdown}>
                                <Dropdown.Toggle variant="light" id="dropdown-basic" as="div" style={{ display: 'flex', alignItems: 'center' }}>
                                    Hello {user.name.split(' ')[0]}! &nbsp;
                                    <img
                                        src={user.profilePicture || 'https://cdn-icons-png.flaticon.com/512/6073/6073873.png'} // Default profile picture
                                        width="30"
                                        height="30"
                                        className="rounded-circle"
                                        alt="User Profile"
                                        style={{ cursor: 'pointer' }}
                                    />
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.Item href="/user-profile">My Profile</Dropdown.Item>
                                    {user.role === 'doctor' && (
                                        <Dropdown.Item href="/user-profile/blog">My Blogs</Dropdown.Item>
                                    )}
                                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
