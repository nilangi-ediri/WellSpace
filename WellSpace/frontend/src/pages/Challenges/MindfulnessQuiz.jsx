import React, { useState, useRef, useEffect } from 'react';
import { Container, Form, Button, Card, Modal } from 'react-bootstrap';
import NavigationBar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../css/mindfulnessQuiz.css';
import HeroQuiz from '../../components/HeroQuiz';

const mindfulnessQuestions = [
  {
    question: 'Do you often find yourself preoccupied with the future or the past?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question1',
    scoring: [4, 3, 2, 1, 0]
  },
  {
    question: 'How often do you engage in activities without really being focused on them?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question2',
    scoring: [4, 3, 2, 1, 0]
  },
  {
    question: 'Are you aware of the sights, sounds, and smells that you encounter throughout the day?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question3',
    scoring: [0, 1, 2, 3, 4]
  },
  {
    question: 'How frequently do you notice new things in familiar places?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question4',
    scoring: [0, 1, 2, 3, 4]
  },
  {
    question: 'Can you recognize your emotions as they arise without immediately reacting to them?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question5',
    scoring: [0, 1, 2, 3, 4]
  },
  {
    question: 'How often do you pay attention to how your emotions are affecting your thoughts and actions?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question6',
    scoring: [0, 1, 2, 3, 4]
  },
  {
    question: 'Do you find yourself judging your experiences as good or bad?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question7',
    scoring: [4, 3, 2, 1, 0]
  },
  {
    question: 'How regularly do you observe your thoughts without labeling them or yourself?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question8',
    scoring: [0, 1, 2, 3, 4]
  },
  {
    question: 'How often do you pay attention to your breath during the day?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question9',
    scoring: [0, 1, 2, 3, 4]
  },
  {
    question: 'Do you use your breath as an anchor to bring you back to the present moment when you\'re distracted?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question10',
    scoring: [0, 1, 2, 3, 4]
  },
  {
    question: 'When a stressful situation arises, do you notice and pause before reacting?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question11',
    scoring: [0, 1, 2, 3, 4]
  },
  {
    question: 'Do you tend to get caught up in a stream of thoughts and worries?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question12',
    scoring: [4, 3, 2, 1, 0]
  },
  {
    question: 'Are you conscious of physical sensations in your body throughout the day?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question13',
    scoring: [0, 1, 2, 3, 4]
  },
  {
    question: 'How often do you perform a quick body scan to check in with how you\'re feeling physically?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question14',
    scoring: [0, 1, 2, 3, 4]
  },
  {
    question: 'In conversations, how often are you fully listening rather than planning what you’ll say next?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question15',
    scoring: [0, 1, 2, 3, 4]
  },
  {
    question: 'Do you find yourself distracted when someone is talking to you?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question16',
    scoring: [4, 3, 2, 1, 0]
  },
  {
    question: 'How do you react to things that require waiting? Do you become impatient easily?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question17',
    scoring: [4, 3, 2, 1, 0]
  },
  {
    question: 'Can you appreciate moments of waiting as time to just be?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question18',
    scoring: [0, 1, 2, 3, 4]
  },
  {
    question: 'Are you accepting of things as they are, even if they don’t match your desires or expectations?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question19',
    scoring: [0, 1, 2, 3, 4]
  },
  {
    question: 'How often do you find yourself trying to change experiences rather than just experiencing them?',
    type: 'radio',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    controlId: 'question20',
    scoring: [4, 3, 2, 1, 0]
  }
];

const MindfulnessQuiz = () => {
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(0);
  const [grade, setGrade] = useState('');
  const [comment, setComment] = useState('');
  const formRef = useRef([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    let totalScore = 0;

    mindfulnessQuestions.forEach((question) => {
      const selectedOption = form.elements[question.controlId].value;
      if (selectedOption !== undefined && !isNaN(selectedOption)) {
        totalScore += question.scoring[selectedOption];
      }
    });

    if (isNaN(totalScore)) {
      alert("Please complete all questions.");
      return;
    }

    setScore(totalScore);
    const { grade, comment } = getGrade(totalScore);
    setGrade(grade);
    setComment(comment);
    handleShow();
  };

  const handleOptionChange = (index) => {
    if (index < mindfulnessQuestions.length - 1) {
      formRef.current[index + 1]?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getGrade = (score) => {
    if (score >= 70) return { grade: 'Excellent', comment: 'You have a high level of mindfulness!' };
    if (score >= 50) return { grade: 'Very Good', comment: 'You are quite mindful, keep it up!' };
    if (score >= 30) return { grade: 'Good', comment: 'You have a decent level of mindfulness, but there\'s room for improvement.' };
    if (score >= 10) return { grade: 'Fair', comment: 'You might want to work on improving your mindfulness practices.' };
    return { grade: 'Poor', comment: 'Consider dedicating more time to mindfulness practices.' };
  };

  return (
    <>
      <NavigationBar />
      <HeroQuiz/>
      <Container className="mindfulness-quiz-container mt-4">
        <p className="quiz-instructions"><center><strong>Please answer the following questions based on your recent experiences. 
          <br/>Each question is graded on a scale from 'Never' to 'Always'. 
          <br/>Your mindfulness level will be assessed based on your responses, with higher scores indicating higher mindfulness.</strong></center></p>

        <Form onSubmit={handleSubmit}>
          {mindfulnessQuestions.map((question, index) => (
            <Card key={index} className="mb-4" ref={(el) => formRef.current[index] = el}>
              <Card.Body>
                <Form.Group controlId={question.controlId}>
                  <Form.Label><strong>{question.question}</strong></Form.Label>
                  <div>
                    {question.options.map((option, idx) => (
                      <Form.Check 
                        type={question.type} 
                        id={`${question.controlId}-${idx}`} 
                        label={option} 
                        name={question.controlId} 
                        value={idx} 
                        key={idx} 
                        onChange={() => handleOptionChange(index)}
                      />
                    ))}
                  </div>
                </Form.Group>
              </Card.Body>
            </Card>
          ))}
          <Button variant="primary" type="submit" className="mb-4">Submit Quiz</Button>
        </Form>
      </Container>
      <Footer />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="custom-modal-header">
          <Modal.Title>Quiz Result</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Your total score is: {score}</p>
          <p>Your grade is: {grade}</p>
          <p>{comment}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MindfulnessQuiz;
