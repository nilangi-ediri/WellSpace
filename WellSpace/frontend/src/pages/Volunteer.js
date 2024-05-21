import React from 'react';
import { Container, Row, Col, Card, Button, Form, Accordion, ListGroup } from 'react-bootstrap';
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroVolunteer from '../components/HeroVolunteer';
import VolunteerTestimonials from '../components/VolunteerTestimonials';
import "../css/volunteer.css"


const Volunteer = () => {
    return (
        <div className="volunteer-page">
            <NavigationBar />
            <HeroVolunteer />
            <Container className="mt-4">
                <Row>
                    <Col md={2} lg={2}>
                        <ListGroup className="sticky-top pt-4">
                            <ListGroup.Item action href="#roles">
                                Volunteering Roles
                            </ListGroup.Item>
                            <ListGroup.Item action href="#benefits">
                                Benefits of Volunteering
                            </ListGroup.Item>
                            <ListGroup.Item action href="#process">
                                Application Process
                            </ListGroup.Item>
                            <ListGroup.Item action href="#commitment">
                                Time Commitment
                            </ListGroup.Item>
                            <ListGroup.Item action href="#training">
                                Training Provided
                            </ListGroup.Item>
                            <ListGroup.Item action href="#remote">
                                Remote Volunteering
                            </ListGroup.Item>
                            <ListGroup.Item action href="#testimonials">
                                Success Stories
                            </ListGroup.Item>
                            <ListGroup.Item action href="#faq">
                                FAQ Section
                            </ListGroup.Item>
                            <ListGroup.Item action href="#signup">
                                Sign-Up Form
                            </ListGroup.Item>

                        </ListGroup>
                    </Col>
                    <Col md={10} lg={10}>
                        <div id="roles" className="mb-4">
                            <Card className="volunteer-info-card">
                                <Card.Body>
                                    <Card.Title>Details of Volunteering Roles</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>
                                                <strong>Counseling Volunteers:</strong> These volunteers provide support to individuals seeking mental health assistance. They offer a listening ear, guidance, and resources to help individuals navigate their mental health challenges.
                                            </li>
                                            <li>
                                                <strong>Expert Contributors to Write:</strong> These volunteers are experts in the field of mental health who contribute articles, blogs, and other written content to help educate and inform our community about various mental health topics.
                                            </li>
                                            <li>
                                                <strong>Event Coordinators:</strong> These volunteers help organize and manage events aimed at promoting mental well-being in the community.
                                            </li>
                                            <li>
                                                <strong>Community Outreach Volunteers:</strong> These volunteers engage with the community to spread awareness about mental health resources and services provided by WellSpace.
                                            </li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div id="benefits" className="mb-4">
                            <Card className="volunteer-info-card">
                                <Card.Body>
                                    <Card.Title>Benefits of Volunteering</Card.Title>
                                    <Card.Text>
                                        Volunteering with WellSpace offers numerous benefits, including:
                                        <ul>
                                            <li>Making a positive impact on the mental well-being of others</li>
                                            <li>Gaining valuable experience and skills in the mental health field</li>
                                            <li>Connecting with a supportive community of like-minded individuals</li>
                                            <li>Enhancing your own mental health and well-being through helping others</li>
                                            <li>Opportunities for personal and professional growth</li>
                                            <li>Access to exclusive training and resources</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div id="process" className="mb-4">
                            <Card className="volunteer-info-card">
                                <Card.Body>
                                    <Card.Title>Application Process</Card.Title>
                                    <Card.Text>
                                        Our application process is straightforward and designed to ensure we find the right volunteers to join our team:
                                        <ol>
                                            <li>Submit your application through the sign-up form below.</li>
                                            <li>Our team will review your application and contact you for an interview.</li>
                                            <li>After the interview, successful candidates will undergo a brief training program.</li>
                                            <li>Once training is completed, you will start your volunteer role and begin making a difference.</li>
                                        </ol>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div id="commitment" className="mb-4">
                            <Card className="volunteer-info-card">
                                <Card.Body>
                                    <Card.Title>Time Commitment</Card.Title>
                                    <Card.Text>
                                        We value your time and commitment to WellSpace. Volunteers are generally expected to commit to a minimum of 5 hours per week. However, the exact time commitment may vary depending on the role and your availability.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div id="training" className="mb-4">
                            <Card className="volunteer-info-card">
                                <Card.Body>
                                    <Card.Title>Training Provided</Card.Title>
                                    <Card.Text>
                                        All volunteers will undergo a brief training program to prepare them for their roles. The training covers essential skills, organizational policies, and guidelines to ensure you are well-equipped to make a meaningful impact.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div id="remote" className="mb-4">
                            <Card className="volunteer-info-card">
                                <Card.Body>
                                    <Card.Title>Remote Volunteering</Card.Title>
                                    <Card.Text>
                                        Many of our volunteering roles can be done remotely, allowing you to contribute from anywhere. We provide all the necessary tools and support to ensure you can volunteer effectively, regardless of your location.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div id="testimonials" className="mb-4">
                            <VolunteerTestimonials />
                        </div>
                        <div id="faq" className="mb-4">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>FAQ Section</Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li><strong>What qualifications do I need to volunteer?</strong> For counseling volunteers, prior experience or training in counseling is preferred. Expert contributors should have a background in mental health or a related field.</li>
                                            <li><strong>How much time is required?</strong> We ask volunteers to commit to a minimum of 5 hours per week, but this can vary based on your role and availability.</li>
                                            <li><strong>Is there any training provided?</strong> Yes, all volunteers will undergo a brief training program to prepare them for their roles.</li>
                                            <li><strong>Can I volunteer remotely?</strong> Yes, many of our volunteering roles can be done remotely, allowing you to contribute from anywhere.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div id="signup" className="mb-4">
                            <Card className="form-card">
                                <Card.Body>
                                    <Card.Title className="text-center">Sign-Up Form</Card.Title>
                                    <Form>
                                        <Form.Group controlId="formName">
                                            <Form.Control type="text" placeholder="Name" />
                                        </Form.Group>
                                        <Form.Group controlId="formEmail" className="mt-3">
                                            <Form.Control type="email" placeholder="Email" />
                                        </Form.Group>
                                        <Form.Group controlId="formPhone" className="mt-3">
                                            <Form.Control type="text" placeholder="Phone Number" />
                                        </Form.Group>
                                        <Form.Group controlId="formRole" className="mt-3">
                                            <Form.Control as="select">
                                                <option value="counseling">Counseling Volunteer</option>
                                                <option value="expert">Expert Contributor</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group controlId="formMessage" className="mt-3">
                                            <Form.Control as="textarea" rows={3} placeholder="Why do you want to volunteer with us?" />
                                        </Form.Group>
                                        <Button variant="dark" type="submit" className="mt-3 w-100">
                                            Sign Up
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Volunteer;
