import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TestimonialVideoSection = () => {
  const videoId = 'DxIDKZHW3-E';
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Container className="testimonial-video-section">
      <Row className="align-items-center">
        <Col md={6} className="quote-section">
          <blockquote className="testimonial-quote">
            “Caring for the mind is as crucial as nurturing the body, for one cannot flourish without the other.”
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
