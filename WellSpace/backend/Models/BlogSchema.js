import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Types.ObjectId,
    ref: "Doctor",
  },
  title: { type: String, required: true },
  content: { type: String, required: true },
  isPublished: {
    type: String,
    enum: ["pending", "published"],
    default: "pending",
  },
  // Additional fields requested by frontend
  link: { type: String },
  category: { type: String },
  comments: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
},
  { timestamps: true }
);

export default mongoose.model("Blog", BlogSchema);