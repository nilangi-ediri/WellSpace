import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { RiMentalHealthLine } from 'react-icons/ri';
import { GrUserExpert } from "react-icons/gr";
import { BiDonateHeart } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";

// https://react-icons.github.io/react-icons/

const cardData = [
    { title: "Are you a Help Seeker?", text: "Begin Your Journey Here", link: "/sign-up", icon: <RiMentalHealthLine /> },
    { title: "Are you an Expert?", text: "Share Your Expertise and Help Others", link: "/path-for-card-2", icon: <GrUserExpert /> },
    { title: "Would you like to Donate?", text: "Offer Your Donations", link: "/path-for-card-3", icon: <BiDonateHeart /> },
    { title: "Would you like to Volunteer?", text: "Join the Volunteer Community", link: "/path-for-card-4", icon: <FaHandsHelping /> },
];

function GetInvolvedCards() {
    return (
        <Container className="text-center my-4">
            <Row xs={1} md={2} className="g-4">
                {cardData.map((card, idx) => (
                    <Col key={idx}>
                        <Link to={card.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card className='card'>
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
