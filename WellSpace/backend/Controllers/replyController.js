import Reply from "../Models/ReplySchema.js"
import Comment from "../Models/CommentSchema.js"

export const createReply = async (req, res) => {
  if (!req.body.comment) {
    req.body.comment = req.params.commentId
  }

  const newReply = new Reply(req.body)

  try {

    const savedReply = await newReply.save()

    await Comment.findByIdAndUpdate(req.body.comment, {
      $push: {
        reply: savedReply._id
      }
    })

    res.status(200).json({
      success: true,
      message: "Reply Submitted",
      data: savedReply
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const deleteReply = async (req, res) => {
  const id = req.params.id

  try {
    const deletedReply = await Reply.findByIdAndDelete(
      id
    )

    if (!deletedReply) {
      return res.status(400).json({
        success: false,
        message: 'REply not found'
      })
    }

    const commentId = deletedReply.comment

    await Comment.findByIdAndUpdate(commentId, {
      $pull: { reply: id }
    })

    res.status(200).json({
      success: true,
      message: 'Reply successfully deleted'
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete'
    })
  }
}

export const getReplyByCommentId = async (req, res) => {
  const { commentId } = req.params;

  try {
    const reply = await Reply.find({ comment: commentId });

    if (!reply) {
      return res.status(404).json({
        success: false,
        message: 'No Reply found for this comment'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Reply found',
      data: reply
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to find reply'
    });
  }
}