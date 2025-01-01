import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Home.css'

const HeroInfo = () => {
    return (
        <div className="hero-section-info">
            <Container fluid className="p-0">
                <Row noGutters className="align-items-center">
                    <Col md={6} className="hero-text p-4">
                        <h1>Learn More about Mental Health</h1>
                        <p>Mental Health Information Provided to Support Your Journey</p>
                    </Col>
                    <Col md={6} className="hero-image p-0" >
                        <img
                            src="https://images.unsplash.com/photo-1559595500-e15296bdbb48?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Path to your hero image
                            alt="WellSpace Hero"
                        // className="w-100 h-auto"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroInfo;