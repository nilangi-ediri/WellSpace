import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/heroChallenges.css';

const HeroQuiz = () => {
    return (
        <div className="chall-hero-section">
            <Container fluid className="p-0">
                <Row noGutters className="align-items-center">
                    <Col md={6} className="hero-text p-4">
                        <h1>Mindfulness Quiz</h1>
                        <p>Assess your mindfulness levels and <br></br>discover areas to improve<br></br> your mental well-being.</p>

                    </Col>
                    <Col md={6} className="hero-image p-0">
                        <img
                            src="https://images.unsplash.com/photo-1571935538821-8ecb6b4dea17?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Path to your hero image
                            alt="WellSpace Mindfulness Quiz"
                        // className="w-100 h-auto"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroQuiz;
