import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { RiMentalHealthLine } from 'react-icons/ri';
import { GrUserExpert } from "react-icons/gr";
import { BiDonateHeart } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";

const cardData = [
    { title: "Are you a Help Seeker?", text: "Begin Your Journey Here", link: "/sign-up?role=patient", icon: <RiMentalHealthLine /> },
    { title: "Are you an Expert?", text: "Share Your Expertise and Help Others", link: "/sign-up?role=doctor", icon: <GrUserExpert /> },
    { title: "Would you like to Donate?", text: "Offer Your Donations", link: "/donation", icon: <BiDonateHeart /> },
    { title: "Would you like to Volunteer?", text: "Join the Volunteer Community", link: "/volunteer", icon: <FaHandsHelping /> },
];

function GetInvolvedCards() {
    return (
        <Container className="text-center my-4">
            <h2 className="mb-3">Get Involved with WellSpace Today!</h2>
            <Row xs={1} md={2} className="g-4">
                {cardData.map((card, idx) => (
                    <Col key={idx}>
                        <Link to={card.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card style={{ backgroundColor: '#e0f7fa' }}
                                className="card-hoverable card-clickable"
                            >
                                <div className="icon-container" style={{ fontSize: '4rem' }}>{card.icon}</div>
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default GetInvolvedCards;