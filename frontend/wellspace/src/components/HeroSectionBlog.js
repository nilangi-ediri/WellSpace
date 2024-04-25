import { Col, Container, Row } from "react-bootstrap";
import '../css/Info.css'

// Add props as a parameter to your functional component
const HeroSectionBlog = (props) => {
    return (
        <div className="hero-section-blog" style={{ backgroundImage: 'url("/images/blog-bg.jpg")' }}>
            <div className="overlay-hero-section-blog">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            {/* Use props to dynamically set the title and subtitle */}
                            <h1>{props.title}</h1>
                            <p>{props.subtitle}</p>
                        </Col>
                        <Col md={6}>
                            {/* Other content or components can go here */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default HeroSectionBlog;
