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
    },
    reply: [{
      type: mongoose.Types.ObjectId,
      ref: "Reply",
    }]
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
  }).populate({
    path: "reply",
    select: "user doctor replyText createdAt"
  })

  next()
})

export default mongoose.model("Comment", commentSchema);