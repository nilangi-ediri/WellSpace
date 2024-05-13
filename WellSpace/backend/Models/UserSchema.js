import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  userName: { type: String, required: true },
  phoneNumber: { type: Number },
  profilePicture: { type: String },
  role: {
    type: String,
    enum: ["patient", "doctor"],
    default: "patient",
  },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
  gender: { type: String, enum: ["male", "female", "other"] },
});

export default mongoose.model("User", UserSchema);