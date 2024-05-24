import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HelpSection = () => {
    return (
        <Container className="text-center my-4">
            <h2 className="mb-3">Need Help?</h2>
            <Row className="justify-content-center">
                <Col xs={12} sm={6} md={3} className="mb-3 mb-md-0">
                    <Link to="/booking">
                        <Button variant="light" className="help-button" style={{ backgroundColor: '#a7f1e5' }}>Book a Counsellor</Button>
                    </Link>
                </Col>
                <Col xs={12} sm={6} md={3} className="mb-3 mb-md-0">
                    <Link to="/info">
                        <Button variant="light" className="help-button" style={{ backgroundColor: '#a7f1e5' }}>Get Information</Button>
                    </Link>
                </Col>
                <Col xs={12} sm={6} md={3} className="mb-3 mb-md-0">
                    <Link to="/blog">
                        <Button variant="light" className="help-button" style={{ backgroundColor: '#a7f1e5' }}>Discuss with Others</Button>
                    </Link>
                </Col>
                <Col xs={12} sm={6} md={3} className="mb-3 mb-md-0">
                    <Link to="/challenges">
                        <Button variant="light" className="help-button" style={{ backgroundColor: '#a7f1e5' }}>Activities</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default HelpSection;

