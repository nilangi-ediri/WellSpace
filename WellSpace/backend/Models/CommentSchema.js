import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    commentText: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);