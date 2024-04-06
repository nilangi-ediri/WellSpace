import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { RiMentalHealthLine } from 'react-icons/ri';

// https://react-icons.github.io/react-icons/

const cardData = [
    { title: "Card Title 1", text: "This is card 1 text...", link: "/sign-up", icon: <RiMentalHealthLine /> },
    { title: "Card Title 2", text: "This is card 2 text...", link: "/path-for-card-2", icon: <RiMentalHealthLine /> },
    { title: "Card Title 3", text: "This is card 3 text...", link: "/path-for-card-3", icon: <RiMentalHealthLine /> },
    { title: "Card Title 4", text: "This is card 4 text...", link: "/path-for-card-4", icon: <RiMentalHealthLine /> },
];

function GetInvolvedCards() {
    return (
        <Container className="text-center my-4">
            <Row xs={1} md={2} className="g-4">
                {cardData.map((card, idx) => (
                    <Col key={idx}>
                        <Link to={card.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Card>
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
