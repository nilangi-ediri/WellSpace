// src/pages/ContactUs.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Toast } from 'react-bootstrap';
import '../css/contact.css';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
  };

  return (
    <div className="App">
      <NavigationBar />
      <div className="content">
        <Container fluid className="contact-us">
          <h2 className="text-center">Get In Touch</h2>
          <Row className="justify-content-center">
            <Col md={3}>
              <Card className="contact-card">
                <Card.Body>
                  <FaMapMarkerAlt size={50} className="contact-icon" aria-label="Address Icon" />
                  <Card.Title>Address</Card.Title>
                  <Card.Text>
                    WellSpace Group Counseling <br />
                    123 Wellness St, <br />
                    Health City
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="contact-card">
                <Card.Body>
                  <FaPhone size={50} className="contact-icon" aria-label="Phone Icon" />
                  <Card.Title>Phone</Card.Title>
                  <Card.Text>
                    WellSpace Group Counseling <br />
                    (123) 456-7890 <br />
                    Available 24/7 for emergency calls
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="contact-card">
                <Card.Body>
                  <FaEnvelope size={50} className="contact-icon" aria-label="Email Icon" />
                  <Card.Title>Email</Card.Title>
                  <Card.Text>
                    contact@wellspace.org <br />
                    For general inquiries and support. <br />
                    We respond within 24 hours.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col md={6}>
              <Card className="contact-card form-card">
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                      <Form.Label>Name:</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                      <Form.Label>E-mail:</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group controlId="formMessage">
                      <Form.Label>Message:</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                    </Form.Group>
                    <Button variant="dark" type="submit" className="mt-3">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
      <Toast
        style={{ position: 'fixed', top: 20, right: 20 }}
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="mr-auto">WellSpace</strong>
        </Toast.Header>
        <Toast.Body>Thank you for your message. We will get back to you soon.</Toast.Body>
      </Toast>
    </div>
  );
};

export default ContactUs;
