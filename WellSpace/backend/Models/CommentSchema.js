import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    blog: {
      type: mongoose.Types.ObjectId,
      ref: "Blog",
    },
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

commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name userName",
  })

  next()
})

export default mongoose.model("Comment", commentSchema);