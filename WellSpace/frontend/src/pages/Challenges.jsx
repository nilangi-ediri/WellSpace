import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../css/challenges.css';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroChallenges from '../components/HeroChallenges';

const challenges = [
  {
    title: '7-Day Mindfulness Challenge',
    image: 'https://images.unsplash.com/photo-1571935538821-8ecb6b4dea17?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/mindfulness-challenge'
  },
  {
    title: 'Gratitude Journaling Challenge',
    image: 'https://images.unsplash.com/photo-1528938102132-4a9276b8e320?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/gratitude-challenge'
  },
  {
    title: 'Digital Detox Challenge',
    image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/digital-detox-challenge'
  },
  {
    title: 'Daily Steps Challenge',
    image: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/steps-challenge'
  },
  {
    title: 'Healthy Eating Challenge',
    image: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/healthy-eating-challenge'
  },
  {
    title: 'Hydration Boost Challenge',
    image: 'https://images.unsplash.com/photo-1517094014682-694379ea076d?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/hydration-challenge'
  },
  {
    title: 'Restful Sleep Challenge',
    image: 'https://images.unsplash.com/photo-1520206183501-b80df61043c2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/restful-sleep-challenge'
  },
  {
    title: 'Positive Affirmations Challenge',
    image: 'https://images.unsplash.com/photo-1633475240238-580ee1b0d5cb?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/affirmations-challenge'
  },
  {
    title: 'Stress Management Challenge',
    image: 'https://images.unsplash.com/photo-1577253313708-cab167d2c474?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/stress-management-challenge'
  }
];

const Challenges = () => {
  return (
    <>
      <NavigationBar />
      <HeroChallenges />
      <Container className="chall-mt-4" id="challenges">
        <h1 className="chall-text-center chall-mb-4">Explore Our Challenges</h1>
        <Row>
          {challenges.map((challenge, index) => (
            <Col md={4} className="chall-mb-4 d-flex align-items-stretch" key={index}>
              <Card className="chall-card chall-shadow-sm">
                <Card.Img variant="top" src={challenge.image} alt={challenge.title} className="chall-card-img" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="chall-card-title">{challenge.title}</Card.Title>
                  <Button variant="primary" href={challenge.link} className="chall-mt-auto">Go to Quiz</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Challenges;
