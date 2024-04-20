import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phoneNumber: { type: Number },
  role: {
    type: String,
    enum: ["patient", "doctor"],
    default: "patient",
  },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
  verificationDocument: {
    type: String,
  },
  gender: { type: String, enum: ["male", "female", "other"] },

  // Users only:
  status: {
    type: String,
    enum: ["pending", "active"],
    default: "pending",
  },
});

export default mongoose.model("User", UserSchema);