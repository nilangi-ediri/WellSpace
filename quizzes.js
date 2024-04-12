import express from 'express';
const router = express.Router();

// Mock data
const quizzes = [
  { id: 1, name: "Quiz", questions: 10 },
  { id: 2, name: "Premium Quiz", questions: 5 }
];

// GET all quizzes
router.get('/', (req, res) => {
  res.json(quizzes);
});

// GET a specific quiz by ID
router.get('/:id', (req, res) => {
  const quiz = quizzes.find(q => q.id.toString() === req.params.id);
  if (quiz) {
    res.json(quiz);
  } else {
    res.status(404).send('Quiz not found');
  }
});

export default router;
