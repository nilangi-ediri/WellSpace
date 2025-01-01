import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './GridExample.css'; // Import your CSS file for styles

function GridExample() {
    const cardInfo = [
        { title: "Help Seeker", text: "Are you looking for help? Begin your journey with us.", imageSrc: "holder.js/100px160" },
        { title: "Expert", text: "Are you an expert? Enrich lives by sharing your knowledge.", imageSrc: "holder.js/100px160" },
        { title: "Donor", text: "Would you like to donate? Your support can change lives.", imageSrc: "holder.js/100px160" },
        { title: "Volunteer", text: "Join our community as a volunteer and make a difference.", imageSrc: "holder.js/100px160" }
    ];

    return (
        <Row xs={1} md={2} className="g-4">
            {cardInfo.map((info, idx) => (
                <Col key={idx}>
                    <Card className="animated-card">
                        <Card.Img variant="top" src={info.imageSrc} />
                        <Card.Body>
                            <Card.Title>{info.title}</Card.Title>
                            <Card.Text>{info.text}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default GridExample;
