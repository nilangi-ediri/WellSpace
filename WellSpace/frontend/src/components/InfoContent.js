import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const InfoContent = () => {
    return (
        <Container fluid>
            <Row className="my-4">
                {/* Side Content Menu */}
                <Col md={4} lg={3} className="mb-4">
                    <ListGroup className="pt-4 sticky-top" variant="flush">
                        <ListGroup.Item action href="#mental-health">
                            Understanding Mental Health
                        </ListGroup.Item>
                        <ListGroup.Item action href="#mindfulness">
                            Mindfulness and Mental Wellbeing
                        </ListGroup.Item>
                        <ListGroup.Item action href="#emotional-wellbeing">
                            Emotional Wellbeing
                        </ListGroup.Item>
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
                    <Card id="mental-health" className="mb-4" style={{ maxWidth: '1300px', margin: 'auto' }}>
                        <Row noGutters>
                            <Col md={4}>
                                <Card.Img
                                    src="https://images.unsplash.com/photo-1611800065908-233b597db552?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>What is Mental Health?</Card.Title>
                                    <Card.Text>
                                        Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices.
                                        <br /><br />
                                        Mental health is important at every stage of life, from childhood and adolescence through adulthood. Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected.
                                        <br /><br />
                                        Many factors contribute to mental health problems, including:
                                        <br />
                                        Biological factors, such as genes or brain chemistry
                                        <br />
                                        Life experiences, such as trauma or abuse
                                        <br />
                                        Family history of mental health problems
                                        <br /><br />
                                        Mental health problems are common but help is available. People with mental health problems can get better and many recover completely.
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                    <Card id="mindfulness" className="mb-4" style={{ maxWidth: '1300px', margin: 'auto' }}>
                        <Row noGutters>
                            <Col md={4}>
                                <Card.Img
                                    src="https://images.unsplash.com/photo-1598826739205-d09823c3bc3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Mindfulness and Mental Wellbeing</Card.Title>
                                    <Card.Text>
                                        Mindfulness is the practice of being present and fully engaged with whatever we're doing at the moment — free from distraction or judgment, and aware of our thoughts and feelings without getting caught up in them.
                                        <br /><br />
                                        Research has shown that mindfulness can help reduce stress, improve attention, decrease anxiety and depression, and improve overall well-being. Mindfulness practices include:
                                        <br />
                                        Meditation
                                        <br />
                                        Deep breathing exercises
                                        <br />
                                        Body scan exercises
                                        <br />
                                        Mindful eating and walking
                                        <br /><br />
                                        Regular mindfulness practice can lead to a deeper understanding of oneself and a greater sense of peace and calm.
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                    <Card id="emotional-wellbeing" className="mb-4" style={{ maxWidth: '1300px', margin: 'auto' }}>
                        <Row noGutters>
                            <Col md={4}>
                                <Card.Img
                                    src="https://images.unsplash.com/photo-1612531810887-6c402753239c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Emotional Wellbeing</Card.Title>
                                    <Card.Text>
                                        Emotional wellbeing is about how we think, feel, and behave. It involves being able to navigate complex emotions, understand and empathize with others, and maintain a sense of perspective.
                                        <br /><br />
                                        Strategies to improve emotional wellbeing include:
                                        <br />
                                        Building strong, positive relationships with others
                                        <br />
                                        Practicing self-compassion and self-care
                                        <br />
                                        Finding healthy ways to manage stress
                                        <br />
                                        Seeking help when needed
                                        <br /><br />
                                        It's important to regularly check in with ourselves and seek support if we're feeling overwhelmed.
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                    <Card id="stress-management" className="mb-4" style={{ maxWidth: '1300px', margin: 'auto' }}>
                        <Row noGutters>
                            <Col md={4}>
                                <Card.Img
                                    src="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Stress Management Techniques</Card.Title>
                                    <Card.Text>
                                        Effective stress management helps you break the hold stress has on your life, so you can be happier, healthier, and more productive. Simple techniques include mindfulness, exercise, and prioritizing tasks.
                                        <br /><br />
                                        Additional stress management techniques include:
                                        <br />
                                        Time management skills
                                        <br />
                                        Engaging in hobbies and activities you enjoy
                                        <br />
                                        Spending time in nature
                                        <br />
                                        Connecting with friends and family
                                        <br /><br />
                                        Finding what works best for you and incorporating it into your daily routine can greatly reduce stress levels.
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                    <Card id="healthy-habits" className="mb-4" style={{ maxWidth: '1300px', margin: 'auto' }}>
                        <Row noGutters>
                            <Col md={4}>
                                <Card.Img
                                    src="https://images.unsplash.com/photo-1474859569645-e0def92b02bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Building Healthy Habits</Card.Title>
                                    <Card.Text>
                                        Developing healthy habits such as a balanced diet, regular physical activity, and adequate sleep can significantly impact your mental health and resilience to stressors.
                                        <br /><br />
                                        Tips for building healthy habits:
                                        <br />
                                        Start small and set achievable goals
                                        <br />
                                        Find a routine that works for you
                                        <br />
                                        Stay consistent and track your progress
                                        <br />
                                        Reward yourself for sticking to your habits
                                        <br /><br />
                                        Remember, building healthy habits takes time and persistence, but the benefits to your mental and physical health are worth it.
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                    <Card id="self-care" className="mb-4" style={{ maxWidth: '1300px', margin: 'auto' }}>
                        <Row noGutters>
                            <Col md={4}>
                                <Card.Img
                                    src="https://images.unsplash.com/photo-1571425046056-cfc17c664e57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Self-Care Strategies</Card.Title>
                                    <Card.Text>
                                        Self-care is an important part of managing life's stresses. Regularly taking time to relax, pursuing hobbies, and setting boundaries can help maintain your mental health.
                                        <br /><br />
                                        Examples of self-care strategies:
                                        <br />
                                        Engaging in physical activities
                                        <br />
                                        Practicing mindfulness and meditation
                                        <br />
                                        Spending time with loved ones
                                        <br />
                                        Setting aside time for hobbies and interests
                                        <br /><br />
                                        Self-care is not selfish; it's necessary for your overall well-being.
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                    <Card id="coping-with-loss" className="mb-4" style={{ maxWidth: '1300px', margin: 'auto' }}>
                        <Row noGutters>
                            <Col md={4}>
                                <Card.Img
                                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Coping with Loss and Grief</Card.Title>
                                    <Card.Text>
                                        Grief can be a rollercoaster. Understanding the process and knowing when to seek support are important steps in the healing journey after loss.
                                        <br /><br />
                                        Strategies to cope with loss:
                                        <br />
                                        Allow yourself to grieve and feel emotions
                                        <br />
                                        Talk about your loss with others
                                        <br />
                                        Find ways to honor and remember your loved one
                                        <br />
                                        Seek professional help if needed
                                        <br /><br />
                                        Everyone's grief journey is different, and it's important to find what works best for you.
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                    <Card id="overcoming-anxiety" className="mb-4" style={{ maxWidth: '1300px', margin: 'auto' }}>
                        <Row noGutters>
                            <Col md={4}>
                                <Card.Img
                                    src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Overcoming Anxiety</Card.Title>
                                    <Card.Text>
                                        Anxiety can be overwhelming, but it's possible to manage it through various therapies, mindfulness practices, and medication when necessary.
                                        <br /><br />
                                        Techniques to manage anxiety:
                                        <br />
                                        Breathing exercises and mindfulness
                                        <br />
                                        Cognitive-behavioral therapy (CBT)
                                        <br />
                                        Regular physical activity
                                        <br />
                                        Building a strong support network
                                        <br /><br />
                                        Seeking professional help is important if anxiety is impacting your daily life.
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                    <Card id="depression-awareness" className="mb-4" style={{ maxWidth: '1300px', margin: 'auto' }}>
                        <Row noGutters>
                            <Col md={4}>
                                <Card.Img
                                    src="https://images.unsplash.com/photo-1526137366523-52967fd40d78?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Depression Awareness and Help</Card.Title>
                                    <Card.Text>
                                        Depression is more than just feeling sad. Understanding its symptoms and getting the right treatment is key to overcoming it.
                                        <br /><br />
                                        Symptoms of depression:
                                        <br />
                                        Persistent sadness or low mood
                                        <br />
                                        Loss of interest in activities once enjoyed
                                        <br />
                                        Changes in appetite and sleep patterns
                                        <br />
                                        Feelings of guilt or worthlessness
                                        <br /><br />
                                        If you or someone you know is experiencing symptoms of depression, seeking professional help is crucial for recovery.
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                    <Card id="connecting-with-others" className="mb-4" style={{ maxWidth: '1300px', margin: 'auto' }}>
                        <Row noGutters>
                            <Col md={4}>
                                <Card.Img
                                    src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Connecting with Others</Card.Title>
                                    <Card.Text>
                                        Social connections can influence our long-term health in ways every bit as powerful as adequate sleep, a good diet, and not smoking. Community and relationships can have a significant impact on mental health.
                                        <br /><br />
                                        Ways to connect with others:
                                        <br />
                                        Join clubs or groups that interest you
                                        <br />
                                        Volunteer in your community
                                        <br />
                                        Attend social events and gatherings
                                        <br />
                                        Reach out to friends and family regularly
                                        <br /><br />
                                        Building and maintaining social connections can provide support, reduce stress, and enhance your overall well-being.
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                    <Card id="finding-help" className="mb-4" style={{ maxWidth: '1300px', margin: 'auto' }}>
                        <Row noGutters>
                            <Col md={4}>
                                <Card.Img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>Finding Professional Help</Card.Title>
                                    <Card.Text>
                                        Sometimes, the best way to deal with mental health issues is to seek professional help. Understanding how to find the right therapist or counselor is crucial for starting the journey to better mental health.
                                        <br /><br />
                                        Steps to finding professional help:
                                        <br />
                                        Research different types of therapy and what might work best for you
                                        <br />
                                        Ask for recommendations from friends, family, or your primary care physician
                                        <br />
                                        Check with your insurance provider for coverage options
                                        <br />
                                        Schedule consultations with potential therapists to find the right fit
                                        <br /><br />
                                        Seeking professional help is a brave and important step towards improving your mental health.
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default InfoContent;
