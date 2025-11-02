import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/heroChallenges.css';

const HeroChallenges = () => {
    return (
        <div className="chall-hero-section">
            <Container fluid className="p-0">
                <Row noGutters className="align-items-center">
                    <Col md={6} className="hero-text p-4">
                        <h1>WellSpace Challenges</h1>
                        <p>Engage in various activities to boost <br></br> your mental <br></br>and <br></br>physical well-being.</p>
                    </Col>
                    <Col md={6} className="hero-image p-0">
                        <img
                            src="https://images.unsplash.com/photo-1500995617113-cf789362a3e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Path to your hero image
                            alt="WellSpace Challenges"
                        // className="w-100 h-auto"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroChallenges;
