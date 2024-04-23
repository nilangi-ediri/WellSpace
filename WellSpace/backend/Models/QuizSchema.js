import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  name: String,
  questions: Number
});

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;
