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
  category: { type: String },
  comments: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
  createdAt: { type: Date, default: Date.now },
  summary: { type: String },
  imageUrl: { type: String }
},
  { timestamps: true }
);

export default mongoose.model("Blog", BlogSchema);