import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  text: { type: String, required: true },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

// If you want to allow nested comments to arbitrary depth, you would typically use:
commentSchema.add({ replies: [commentSchema] });

const BlogSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },
  title: { type: String, required: true },
  content: { type: String, required: true },
  isPublished: {
    type: String,
    enum: ["pending", "published"],
    default: "pending",
  },
  category: { type: String },
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now },
  summary: { type: String },
  imageUrl: { type: String }
},
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);
const Comment = mongoose.model('Comment', commentSchema); // If needed as a separate model

export default Blog;
