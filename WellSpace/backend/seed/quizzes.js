import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Quiz from '../Models/QuizSchema.js'; // Adjust the path as necessary

dotenv.config();

const seedQuizzes = [
  { name: "Quiz", questions: 10 },
  { name: "Premium Quiz", questions: 5 }
];

const insertQuizzes = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await Quiz.deleteMany(); // Warning: This will delete all existing entries!
    await Quiz.insertMany(seedQuizzes);
    console.log('Quizzes have been seeded');
  } catch (error) {
    console.error('An error occurred while seeding quizzes:', error);
  } finally {
    mongoose.disconnect();
  }
};

insertQuizzes();
