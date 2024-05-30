import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  name: String,
  questions: Number
});

export default mongoose.model('Quiz', quizSchema);

