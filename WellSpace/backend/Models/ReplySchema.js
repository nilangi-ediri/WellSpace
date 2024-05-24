import mongoose from "mongoose";

const replySchema = new mongoose.Schema(
  {
    comment: {
      type: mongoose.Types.ObjectId,
      ref: "Comment",
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
    replyText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

replySchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name userName",
  }).populate({
    path: "doctor",
    select: "name userName",
  })

  next()
})

export default mongoose.model("Reply", replySchema);