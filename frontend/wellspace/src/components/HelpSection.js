import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HelpSection = () => {
    return (
        <Container className="text-center my-4">
            <h2 className="mb-3">Need Help?</h2>
            <Row className="justify-content-center">
                <Col xs={12} sm={6} md={3} className="mb-3 mb-md-0">
                    <Button variant="primary" className="help-button">Book a Counsellor</Button>
                </Col>
                <Col xs={12} sm={6} md={3} className="mb-3 mb-md-0">
                    <Button variant="primary" className="help-button">Get Information</Button>
                </Col>
                <Col xs={12} sm={6} md={3} className="mb-3 mb-md-0">
                    <Button variant="primary" className="help-button">Discuss with Others</Button>
                </Col>
                <Col xs={12} sm={6} md={3} className="mb-3 mb-md-0">
                    <Button variant="primary" className="help-button">Activities</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default HelpSection;
