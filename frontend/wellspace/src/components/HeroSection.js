import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = () => {
    return (
        <div className="hero-section" style={{ backgroundImage: 'url("/images/hero-background.jpg")' }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h1>Welcome to WellSpace!</h1>
                        <p>Your Safe and Secure Mental Health Platform.</p>
                    </Col>
                    <Col md={6}>
                        {/* You can add additional content here if needed, like an image */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;
