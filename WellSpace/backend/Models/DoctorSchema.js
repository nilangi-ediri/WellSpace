import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  userName: { type: String, required: true },
  phone: { type: Number },
  ticketPrice: { type: Number },
  role: {
    type: String,
  },
  gender: { type: String, enum: ["male", "female", "other"] },

  // Doctors only:
  specialization: { type: String },
  qualifications: {
    type: Array,
  },
  experiences: {
    type: Array,
  },
  bio: { type: String, maxLength: 50 },
  about: { type: String },
  timeSlots: { type: Array },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
  blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog" }],
  verificationDocument: {
    type: String,
  },
});

export default mongoose.model("Doctor", DoctorSchema);