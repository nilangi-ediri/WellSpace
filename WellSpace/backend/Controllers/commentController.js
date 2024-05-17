import Comment from "../Models/CommentSchema.js"
import Blog from "../Models/BlogSchema.js"

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({})

    res.status(200).json({
      success: true,
      message: 'All Comments found',
      data: comments
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: 'No Comments found'
    })
  }
}

export const createComment = async (req, res) => {
  if (!req.body.blog) {
    req.body.blog = req.params.blogId
  }
  if (!req.body.user) {
    req.body.user = req.userId
  }

  const newComment = new Comment(req.body)

  try {

    const savedComment = await newComment.save()

    await Blog.findByIdAndUpdate(req.body.blog, {
      $push: {
        comments: savedComment._id
      }
    })

    res.status(200).json({
      success: true,
      message: "Comment Submitted",
      data: savedComment
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}