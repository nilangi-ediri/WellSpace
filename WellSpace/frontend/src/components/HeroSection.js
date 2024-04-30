import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Home.css'

const HeroSection = () => {
    return (
        <div className="hero-section">
            <Container fluid className="p-0">
                <Row noGutters className="align-items-center">
                    <Col md={6} className="hero-text p-4">
                        <h1>Welcome to WellSpace!</h1>
                        <p>Your Safe and Secure Mental Health Platform.</p>
                    </Col>
                    <Col md={6} className="hero-image p-0" >
                        <img
                            src="/images/heroimage.jpg" // Path to your hero image
                            alt="WellSpace Hero"
                        // className="w-100 h-auto"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroSection;


/* import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HeroSection = () => {
    return (
        <div className="hero-section" style={{ backgroundImage: 'url("/images/heroimage.jpg")' }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h1>Welcome to WellSpace!</h1>
                        <p>Your Safe and Secure Mental Health Platform.</p>
                    </Col>
                    <Col md={6}>
                        {/* You can add additional content here if needed, like an image *//* }
</Col>
</Row>
</Container>
</div>
);
};

export default HeroSection; */ 