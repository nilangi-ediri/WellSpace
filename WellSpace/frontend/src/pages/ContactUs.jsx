// src/pages/ContactUs.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/contact.css';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
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
                  <FaMapMarkerAlt size={50} className="contact-icon" />
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
                  <FaPhone size={50} className="contact-icon" />
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
                  <FaEnvelope size={50} className="contact-icon" />
                  <Card.Title>Email</Card.Title>
                  <Card.Text>
                    contact@wellspace.org
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
