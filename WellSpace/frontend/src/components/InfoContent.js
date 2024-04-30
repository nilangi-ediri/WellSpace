import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const InfoContent = () => {
    return (
        <Container fluid>
            <Row className="my-4">
                {/* Side Content Menu */}
                <Col md={4} lg={3} className="mb-4">
                    <ListGroup variant="flush">
                        <ListGroup.Item action href="#mental-health">
                            Understanding Mental Health
                        </ListGroup.Item>
                        <ListGroup.Item action href="#mindfulness">
                            Mindfulness and Mental Wellbeing
                        </ListGroup.Item>
                        <ListGroup.Item action href="#emotional-wellbeing">
                            Emotional Wellbeing
                        </ListGroup.Item>
                        {/* Add more list items for additional sections */}
                        <ListGroup.Item action href="#stress-management">
                            Stress Management Techniques
                        </ListGroup.Item>
                        <ListGroup.Item action href="#healthy-habits">
                            Building Healthy Habits
                        </ListGroup.Item>
                        <ListGroup.Item action href="#self-care">
                            Self-Care Strategies
                        </ListGroup.Item>
                        <ListGroup.Item action href="#coping-with-loss">
                            Coping with Loss and Grief
                        </ListGroup.Item>
                        <ListGroup.Item action href="#overcoming-anxiety">
                            Overcoming Anxiety
                        </ListGroup.Item>
                        <ListGroup.Item action href="#depression-awareness">
                            Depression Awareness and Help
                        </ListGroup.Item>
                        <ListGroup.Item action href="#connecting-with-others">
                            Connecting with Others
                        </ListGroup.Item>
                        <ListGroup.Item action href="#finding-help">
                            Finding Professional Help
                        </ListGroup.Item>
                    </ListGroup>

                </Col>

                {/* Main Content */}
                <Col md={8} lg={9}>
                    <Card id="mental-health" className="mb-4">
                        <Card.Body>
                            <Card.Title>What is Mental Health?</Card.Title>
                            <Card.Img variant="top" className="w-50" src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <Card.Text>
                                Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card id="mindfulness" className="mb-4">
                        <Card.Body>
                            <Card.Title>Mindfulness and Mental Wellbeing</Card.Title>
                            <Card.Img variant="top" className="w-50" src="https://images.unsplash.com/photo-1611800065908-233b597db552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <Card.Text>
                                Mindfulness is the practice of being present and fully engaged with whatever we're doing at the moment — free from distraction or judgment, and aware of our thoughts and feelings without getting caught up in them.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card id="emotional-wellbeing" className="mb-4">
                        <Card.Body>
                            <Card.Title>Emotional Wellbeing</Card.Title>
                            <Card.Img variant="top" className="w-50" src="https://images.unsplash.com/photo-1612531810887-6c402753239c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <Card.Text>
                                Emotional wellbeing is about how we think, feel, and behave. It involves being able to navigate complex emotions, understand and empathize with others, and maintain a sense of perspective.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card id="stress-management" className="mb-4">
                        <Card.Body>
                            <Card.Title>Stress Management Techniques</Card.Title>
                            {/* Image placeholder */}
                            <Card.Text>
                                Effective stress management helps you break the hold stress has on your life, so you can be happier, healthier, and more productive. Simple techniques include mindfulness, exercise, and prioritizing tasks.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card id="healthy-habits" className="mb-4">
                        <Card.Body>
                            <Card.Title>Building Healthy Habits</Card.Title>
                            {/* Image placeholder */}
                            <Card.Text>
                                Developing healthy habits such as a balanced diet, regular physical activity, and adequate sleep can significantly impact your mental health and resilience to stressors.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card id="self-care" className="mb-4">
                        <Card.Body>
                            <Card.Title>Self-Care Strategies</Card.Title>
                            {/* Image placeholder */}
                            <Card.Text>
                                Self-care is an important part of managing life's stresses. Regularly taking time to relax, pursuing hobbies, and setting boundaries can help maintain your mental health.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card id="coping-with-loss" className="mb-4">
                        <Card.Body>
                            <Card.Title>Coping with Loss and Grief</Card.Title>
                            {/* Image placeholder */}
                            <Card.Text>
                                Grief can be a rollercoaster. Understanding the process and knowing when to seek support are important steps in the healing journey after loss.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card id="overcoming-anxiety" className="mb-4">
                        <Card.Body>
                            <Card.Title>Overcoming Anxiety</Card.Title>
                            {/* Image placeholder */}
                            <Card.Text>
                                Anxiety can be overwhelming, but it's possible to manage it through various therapies, mindfulness practices, and medication when necessary.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card id="depression-awareness" className="mb-4">
                        <Card.Body>
                            <Card.Title>Depression Awareness and Help</Card.Title>
                            {/* Image placeholder */}
                            <Card.Text>
                                Depression is more than just feeling sad. Understanding its symptoms and getting the right treatment is key to overcoming it.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card id="connecting-with-others" className="mb-4">
                        <Card.Body>
                            <Card.Title>Connecting with Others</Card.Title>
                            {/* Image placeholder */}
                            <Card.Text>
                                Social connections can influence our long-term health in ways every bit as powerful as adequate sleep, a good diet, and not smoking. Community and relationships can have a significant impact on mental health.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card id="finding-help" className="mb-4">
                        <Card.Body>
                            <Card.Title>Finding Professional Help</Card.Title>
                            {/* Image placeholder */}
                            <Card.Text>
                                Sometimes, the best way to deal with mental health issues is to seek professional help. Understanding how to find the right therapist or counselor is crucial for starting the journey to better mental health.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default InfoContent;
