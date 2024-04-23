import Quiz from '../Models/QuizSchema.js';

export const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (quiz) {
      res.json(quiz);
    } else {
      res.status(404).send('Quiz not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
