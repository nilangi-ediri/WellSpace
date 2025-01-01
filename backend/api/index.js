import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "../Routes/auth.js";
import doctorRoute from "../Routes/doctor.js";
import userRoute from "../Routes/user.js";
import feedbackRoute from "../Routes/feedback.js";
import blogRoute from "../Routes/blog.js";
import commentRoute from "../Routes/comment.js";
import replyRoute from "../Routes/reply.js";
import informationRoute from '../Routes/information.js';
import quizzesRoute from '../Routes/quizzes.js';
import aboutRoutes from '../Routes/about.js';
import bookingRoutes from '../Routes/bookings.js';
import notificationRoutes from '../Routes/notifications.js';
import Doctor from "../Models/DoctorSchema.js"
import { doctors } from "../seed/doctors.js"
import User from "../Models/UserSchema.js"
import { users } from "../seed/users.js"
import Blog from "../Models/BlogSchema.js"
import { blogs } from "../seed/blogs.js"
import Review from "../Models/ReviewSchema.js"
import { reviews } from "../seed/reviews.js"
import Comment from "../Models/CommentSchema.js"
import { comments } from "../seed/comments.js"
import Reply from "../Models/ReplySchema.js"
import { replies } from "../seed/reply.js"
import Booking from "../Models/BookingSchema.js"
import { bookings } from "../seed/bookings.js"
import About from "../Models/AboutSchema.js"
import { about } from "../seed/about.js"
import Information from "../Models/InformationSchema.js"
import { seedInformation } from "../seed/information.js"
import Quiz from "../Models/QuizSchema.js"
import { seedQuizzes } from "../seed/quizzes.js"

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send("Api is working")
})

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/doctors', doctorRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/feedbacks', feedbackRoute)
app.use('/api/v1/blogs', blogRoute)
app.use('/api/v1/comments', commentRoute)
app.use('/api/v1/replies', replyRoute)
app.use('/api/v1/information', informationRoute);
app.use('/api/v1/quizzes', quizzesRoute);
app.use('/api/about', aboutRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/notifications', notificationRoutes);


mongoose.set('strictQuery', false)

if (process.env.SEED_DB === 'true') {
  console.log(("Seeding starts..."));
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => app.listen(port, () => console.log("Server is running on port: " + port)))
    .then(async () => {
      try {
        await mongoose.connection.dropCollection('users');
        console.log("Collection 'users' dropped.");

        await mongoose.connection.dropCollection('doctors');
        console.log("Collection 'doctors' dropped.");

        await mongoose.connection.dropCollection('blogs');
        console.log("Collection 'blogs' dropped.");

        await mongoose.connection.dropCollection('reviews');
        console.log("Collection 'reviews' dropped.");

        await mongoose.connection.dropCollection('comments');
        console.log("Collection 'comments' dropped.");

        await mongoose.connection.dropCollection('replies');
        console.log("Collection 'replies' dropped.");

        await mongoose.connection.dropCollection('abouts');
        console.log("Collection 'About' dropped.");

        await mongoose.connection.dropCollection('bookings');
        console.log("Collection 'Booking' dropped.");

        await mongoose.connection.dropCollection('informations');
        console.log("Collection 'informations' dropped.");

        await mongoose.connection.dropCollection('quizs');
        console.log("Collection 'quiz' dropped.");

      } catch (error) {
        console.error("Error dropping collections:", error);
      }
    })
    .then(() => {
      Doctor.insertMany(doctors)
      console.log("Seeded Doctors...")

      User.insertMany(users)
      console.log("Seeded Users...")

      Blog.insertMany(blogs)
      console.log("Seeded Blogs...")

      Review.insertMany(reviews)
      console.log("Seeded Reviews...")

      Comment.insertMany(comments)
      console.log("Seeded Comments...")

      Reply.insertMany(replies)
      console.log("Seeded replies...")

      Booking.insertMany(bookings)
      console.log("Seeded bookings...")

      About.insertMany(about)
      console.log("Seeded about...")

      Information.insertMany(seedInformation)
      console.log("Seeded Information...")

      Quiz.insertMany(seedQuizzes)
      console.log("Seeded Quizzes...")
    })
    .catch((error) => console.log(`${error}: connection failed`))

} else {
  console.log(("Seeding skipped..."));
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => app.listen(port, () => console.log("Server is running on port: " + port)))
    .catch((error) => console.log(`${error}: connection failed`))
}
