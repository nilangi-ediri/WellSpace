import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../components/Footer';
import NavigationBar from '../components/Navbar';
import doctor1Photo from '../images/dr1.jpg';
import doctor2Photo from '../images/Dr.jpg';
import doctor3Photo from '../images/dr3.png';
// import '../css/AboutUs.css'

export default function AboutUs() {
  return (
    <div>
      <main>
        <NavigationBar/>
        <section className="hero" style={{ backgroundColor: '#b2edeb', padding: '50px 0', textAlign: 'center' }}>
          <Container>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Welcome to WellSpace</h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '30px' }}>We provide a safe and supportive environment for your mental wellness journey.</p>
            <Link to="/booking" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '1rem' }}>Book Now</Link>
          </Container>
        </section>

        <section className="services" style={{ padding: '50px 0' }}>
          <Container>
            <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>Our Services</h2>
            <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Col md={6} className="mb-4" style={{ display: 'flex' }}>
                <Card style={{ flex: 1, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Counseling</Card.Title>
                    <Card.Text style={{ fontSize: '1rem' }}>
                      Counseling sessions are structured meetings between a trained counselor or therapist and an individual seeking support, guidance, and resolution of personal or interpersonal issues. Counseling aims to empower clients to explore their feelings, thoughts, and behaviors, and to develop coping strategies and solutions to address their concerns.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4" style={{ display: 'flex' }}>
                <Card style={{ flex: 1, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Therapy Sessions</Card.Title>
                    <Card.Text style={{ fontSize: '1rem' }}>
                      Therapy sessions, also known as counseling or psychotherapy sessions, are structured meetings between a therapist or counselor and an individual or group seeking support, guidance, and treatment for mental, emotional, or behavioral challenges. These sessions aim to facilitate personal growth, alleviate distress, and improve overall well-being through a collaborative therapeutic process.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-4" style={{ display: 'flex' }}>
                <Card style={{ flex: 1, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Mindfulness Workshops</Card.Title>
                    <Card.Text style={{ fontSize: '1rem' }}>
                      Mindfulness workshops are structured programs or sessions designed to introduce participants to the practice of mindfulness and teach them techniques to cultivate present-moment awareness, non-judgmental observation, and self-compassion. These workshops typically incorporate a combination of education, experiential exercises, guided meditations, and group discussions to help participants understand and integrate mindfulness into their daily lives.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4" style={{ display: 'flex' }}>
                <Card style={{ flex: 1, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Group Therapy</Card.Title>
                    <Card.Text style={{ fontSize: '1rem' }}>
                      Group therapy is a form of psychotherapy where a small, carefully selected group of individuals meet regularly to discuss and work through their emotional or psychological issues under the guidance of a trained therapist or facilitator. Instead of one-on-one sessions, group therapy offers participants the opportunity to share their experiences, thoughts, and feelings with others who may be facing similar challenges.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="team" style={{ backgroundColor: '#f8f9fa', padding: '50px 0' }}>
          <Container>
            <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>Meet Our Team</h2>
            <Row>
              <Col md={4} className="mb-4">
                <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                  <Card.Img variant="top" src={doctor1Photo} alt="Team Member" style={{ height: '300px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                  <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Dr. Anna Howard</Card.Title>
                    <Card.Text style={{ fontSize: '1rem' }}>Counsellor</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                  <Card.Img variant="top" src={doctor2Photo} alt="Team Member" style={{ height: '300px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                  <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Dr. Juliet Burke</Card.Title>
                    <Card.Text style={{ fontSize: '1rem' }}>Psychiatrist</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                  <Card.Img variant="top" src={doctor3Photo} alt="Team Member" style={{ height: '300px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                  <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Dr. Naomi Bennett</Card.Title>
                    <Card.Text style={{ fontSize: '1rem' }}>Psychiatrist</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
          <Container>
            &copy; 2024 WellSpace. All rights reserved.
          </Container>
        </footer> */}
        <Footer/>
      </main>
    </div>
  );
}
