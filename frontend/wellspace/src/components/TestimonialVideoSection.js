import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TestimonialVideoSection = () => {
  const videoId = 'G0M41N1Lyw4';
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Container fluid className="testimonial-video-section">
      <Row className="align-items-center">
        <Col md={6} className="quote-section">
          <blockquote className="testimonial-quote">
            “If it wasn't for Mind I wouldn't be here now. I will never forget their part in my recovery.”
          </blockquote>
        </Col>
        <Col md={6} className="video-section">
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default TestimonialVideoSection;
