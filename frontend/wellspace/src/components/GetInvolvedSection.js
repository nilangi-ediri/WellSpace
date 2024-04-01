import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const GetInvolvedSection = () => {
    return (
        <Container fluid style={{ backgroundColor: '#DFDFDF' }}>
            <Container className="py-5" >
                <h2 className="section-title text-center mb-4">Get Involved</h2>
                <Row className="align-items-center mb-3">
                    <Col md={6}>
                        <p className="question">Are you a help seeker?</p>
                    </Col>
                    <Col md={6}>
                        <Button className="action-btn" href="#">Begin Your Journey</Button>
                    </Col>
                </Row>
                <Row className="align-items-center mb-3">
                    <Col md={6}>
                        <p className="question">Are you an expert?</p>
                    </Col>
                    <Col md={6}>
                        <Button className="action-btn" href="#">Enrich Lives</Button>
                    </Col>
                </Row>
                <Row className="align-items-center mb-3">
                    <Col md={6}>
                        <p className="question">Would you like to donate?</p>
                    </Col>
                    <Col md={6}>
                        <Button className="action-btn" href="#">Offer Support</Button>
                    </Col>
                </Row>
                <Row className="align-items-center mb-3">
                    <Col md={6}>
                        <p className="question">Would you like to volunteer?</p>
                    </Col>
                    <Col md={6}>
                        <Button className="action-btn" href="#">Join The Community</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default GetInvolvedSection;
