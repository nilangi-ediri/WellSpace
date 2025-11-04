import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Toast } from 'react-bootstrap';
import '../css/contact.css';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_URL;

const ContactUs = () => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFeedback(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendFeedback = async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/feedbacks/create`, data);
      if (response.status === 200) {
        setShowToast(true);
      }
    } catch (error) {
      console.error('Error sending feedback:', error);
      // Handle error appropriately here
    }
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
                  <Card.Text>
                    <h6>Send Us Your Questions or Feedback</h6>
                  </Card.Text>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Control
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSubject">
                      <Form.Control
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMessage">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                      />
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
