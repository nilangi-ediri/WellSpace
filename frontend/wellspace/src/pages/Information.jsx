import React from 'react';
import { Container, Row, Col, Button, Card, Accordion } from 'react-bootstrap';
import '../css/Info.css'

function InformationPage() {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Welcome to WellSpace</h1>
          <p>A Website for Wellbeing and Mental Health</p>
        </Col>
      </Row>
      
      <Row>
        <Col md={8}>
          <h2>Our Mission</h2>
          <p>
            WellSpace aims to create a positive online environment dedicated to the mental health and 
            wellness of the general public. We provide a platform for users to connect with like-minded 
            individuals and access professional help through online counseling sessions.
          </p>
          
          <h2>Why Mental Health Matters</h2>
          <p>
            In today’s fast-paced world, mental health has become a crucial part of our overall wellbeing. 
            Neglecting mental health can lead to serious consequences, affecting our quality of life, 
            relationships, and physical health.
          </p>
          
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Learn More About Mental Health
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Mental health includes our emotional, psychological, and social well-being. It affects 
                  how we think, feel, and act. It also helps determine how we handle stress, relate to 
                  others, and make choices.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Button variant="primary">Book Counseling Services</Button>
        </Col>
        
        <Col md={4}>
          <h3>Interactive Activities</h3>
          <Card>
            <Card.Img variant="top" src="path-to-your-mental-health-image.jpg" />
            <Card.Body>
              <Card.Title>7-Day Mindfulness Challenge</Card.Title>
              <Card.Text>
                Join our challenge to incorporate mindfulness into your daily routine and improve 
                your mental well-being.
              </Card.Text>
              <Button variant="success">Join Challenge</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="my-4">
        <Col>
          <h2>Community Engagement</h2>
          <p>
            Connect with a community that cares. Participate in discussions, share your experiences, 
            and find support in our blog and forums.
          </p>
          <Button variant="info">Join the Community</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default InformationPage;
