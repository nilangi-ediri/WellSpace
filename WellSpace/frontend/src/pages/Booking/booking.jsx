import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Navbar, Form, Button, Modal, Row, Col } from 'react-bootstrap';
import NavigationBar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Booking = () => {
  // State for form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');

  // State for the modal visibility
  const [showModal, setShowModal] = useState(false);

  // Extract doctor name from location state
  const location = useLocation();
  const doctorName = location.state ? location.state.doctorName : '';

  // Array of doctors
  const doctors = [
    'Dr. Juliet Burke',
    'Dr. Anna Howard',
    'Dr. Naomi Bennett',
    'Dr. James Cameron',
    'Dr. Tom Holland'
  ];

  // Array of time slots in 30-minute intervals
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  // Set the selected doctor if navigated from DoctorsPage and show the modal
  useEffect(() => {
    if (doctorName) {
      setSelectedDoctor(doctorName);
      setShowModal(true);
    }
  }, [doctorName]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation and submission logic here
    console.log('Form submitted!');
    console.log('Name:', fullName);
    console.log('Email:', email);
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
    console.log('Selected Service:', selectedService);
    console.log('Notes:', notes);
    console.log('Doctor Name:', selectedDoctor);

    setShowModal(true);
  };

  return (
    <div>
      <main>
        <NavigationBar />
        <section className="hero" style={{ backgroundColor: '#b2edeb', padding: '50px 0' }}>
          <div className="hero-content" style={{ textAlign: 'center' }}>
            <Container>
              <h1>Discover Your Path to Wellness at WellSpace</h1>
              <p>We provide a safe and supportive environment for your mental wellness journey.</p>
              <Link to="/doctorspage" className="btn btn-success">View Our Experts</Link>
            </Container>
          </div>
        </section>

        <section className="booking-section" style={{ padding: '50px 0' }}>
          <Container>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '30px' }}>Book an Appointment</h2>
            <Form onSubmit={handleSubmit} id="booking-form">
              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="fullName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="date">
                    <Form.Label>Preferred Date:</Form.Label>
                    <Form.Control type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="time">
                    <Form.Label>Preferred Time:</Form.Label>
                    <Form.Control as="select" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required>
                      <option value="">Select Time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <Form.Group controlId="doctor">
                    <Form.Label>Select Doctor:</Form.Label>
                    <Form.Control as="select" value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} required>
                      <option value="">Select Doctor</option>
                      {doctors.map((doctor, index) => (
                        <option key={index} value={doctor}>{doctor}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="service">
                    <Form.Label>Select Service:</Form.Label>
                    <Form.Control as="select" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required>
                      <option value="">Select Service</option>
                      <option value="Counseling">Counseling</option>
                      <option value="Therapy Session">Therapy Session</option>
                      <option value="Mindfulness Workshop">Mindfulness Workshop</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="notes" className="mb-3">
                <Form.Label>Additional Notes:</Form.Label>
                <Form.Control as="textarea" rows={2} value={notes} onChange={(e) => setNotes(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-2">Book Now</Button>
            </Form>
          </Container>
        </section>
        <Footer />
      </main>

      {/* Doctor Name Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your booking with <strong>{selectedDoctor}</strong> is successful.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Booking;
