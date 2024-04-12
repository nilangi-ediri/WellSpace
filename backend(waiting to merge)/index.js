import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './Routes/auth.js';
import informationRoute from './Routes/information.js';
import quizzesRoute from './Routes/quizzes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/information', informationRoute);
app.use('/api/v1/quizzes', quizzesRoute);

mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB database is connected successfully");
    app.listen(port, () => console.log(`Server is running on port
