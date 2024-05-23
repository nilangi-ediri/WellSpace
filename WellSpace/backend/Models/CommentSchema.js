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
      default: null,
    },
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      default: null,
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
  }).populate({
    path: "doctor",
    select: "name userName",
  })

  next()
})

export default mongoose.model("Comment", commentSchema);