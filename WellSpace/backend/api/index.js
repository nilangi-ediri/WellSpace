import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send("Api is working")
})

app.use(cors())
app.use(express.json())
app.use(cookieParser())

mongoose.set('strictQuery', false)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB database is connected successfully")
    app.listen(port, () => console.log("Server is running on port: " + port))
  })
  .catch((error) => console.log(`${error}: connection failed`))