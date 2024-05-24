import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import '../css/DoctorsPage.css';

import doctor1Photo from '../../images/dr1.jpg';
import doctor2Photo from '../../images/Dr.jpg';
import doctor3Photo from '../../images/dr3.png';
import doctor4Photo from '../../images/dr4.jpg';
import doctor5Photo from '../../images/dr5.jpg';
import NavigationBar from '../../components/Navbar';
import Footer from '../../components/Footer';

const DoctorsPage = () => {
  const doctors = [
    {
      name: 'Dr. John Watson',
      expertise: 'Psychiatrist',
      experience: '10 years',
      photo: doctor1Photo,
    },
    {
      name: 'Dr. James Simon',
      expertise: 'Counsellor',
      experience: '12 years',
      photo: doctor2Photo,
    },
    {
      name: 'Dr. Steven Strange',
      expertise: 'Psychiatrist',
      experience: '15 years',
      photo: doctor3Photo,
    },
    {
      name: 'Dr. James Cameron',
      expertise: 'Psychologist',
      experience: '5 years',
      photo: doctor4Photo,
    },
    {
      name: 'Tom Holland',
      expertise: 'Mentor',
      experience: '12 years',
      photo: doctor5Photo,
    }
  ];

  return (
    <>
    <NavigationBar/>
    <Container className="mt-5">
       
      <h2 className="text-center mb-4">Our Doctors</h2>
      <Row>
        {doctors.map((doctor, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="doctor-card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
              <div className="card-image-container" style={{ overflow: 'hidden', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
                <Card.Img variant="top" src={doctor.photo} className="doctor-img" alt={doctor.name} style={{ height: '250px', objectFit: 'cover' }} />
              </div>
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{doctor.name}</Card.Title>
                <Card.Text>
                  <strong>Expertise:</strong> {doctor.expertise}<br />
                  <strong>Experience:</strong> {doctor.experience}
                </Card.Text>
                <div>
                  <Link
                    to={{
                      pathname: "/booking",
                      state: { doctorName: doctor.name }
                    }}
                    className="btn btn-primary btn-block"
                    style={{ borderRadius: '5px', padding: '10px 20px' }}
                  >
                    Book Now
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Footer/>
    </>
  );
}

export default DoctorsPage;
