import Blog from "../Models/BlogSchema.js"
import Doctor from "../Models/DoctorSchema.js"

export const createBlog = async (req, res) => {
  const id = req.params.doctorId
  const { title, content, category, image, summary, isPublished } = req.body

  console.log(id)
  console.log(req.body)

  try {
    const newBlog = new Blog({
      title,
      content,
      category,
      imageUrl: image,
      doctor: id,
      isPublished,
      summary
    })

    const savedBlog = await newBlog.save()

    await Doctor.findByIdAndUpdate(id, {
      $push: {
        blogs: savedBlog._id
      }
    })

    res.status(200).json({
      success: true,
      message: "Blog Submitted",
      data: savedBlog
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const getAllBlog = async (req, res) => {
  try {

    const { query } = req.query
    let blogs

    if (query) {
      blogs = await Blog.find({
        isPublished: 'published',
        $or: [
          { title: { $regex: query, $options: "i" } },
          { content: { $regex: query, $options: "i" } }
        ]
      }).populate('doctor')
    } else {
      blogs = await Blog.find({ isPublished: 'published' }).populate('doctor')
    }

    res.status(200).json({
      success: true,
      message: 'All Blogs found',
      data: blogs
    })

  } catch (error) {
    console.log(error)
    res.status(404).json({
      success: false,
      message: 'No Blogs found'
    })
  }
}

export const getSingleBlog = async (req, res) => {
  const id = req.params.blogId

  try {

    const singleBlog = await Blog.findById(id)
      .populate('doctor')
      .populate('comments')

    res.status(200).json({
      success: true,
      message: 'Blog successfully found',
      data: singleBlog
    })

  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'No Blog found'
    })
  }
}

export const addComments = async (req, res) => {
  const { username, text, parentId } = req.body;
  console.log(req.body)
  try {
    const post = await Blog.findById(req.params.postId);
    if (!post) {
      return res.status(404).send('Post not found');
    }

    const newComment = { username, text, replies: [] };

    if (parentId) {
      // Find the parent comment and add the new comment to replies
      const parentComment = post.comments.id(parentId);
      if (!parentComment) {
        return res.status(404).send('Parent comment not found');
      }
      parentComment.replies.push(newComment);
    } else {
      // Add a new top-level comment
      post.comments.push(newComment);
    }

    await post.save();
    res.status(201).json({ message: 'Comment added successfully', comment: newComment });
  } catch (error) {
    console.error('Error adding comment:', error);
    console.log(error)
    res.status(500).send('Error adding comment');
  }
}

export const updateBlog = async (req, res) => {
  const id = req.params.id


  try {
    const updateBlog = await Blog.findByIdAndUpdate(
      id,
      {
        $set: req.body
      },
      {
        new: true
      }
    )

    res.status(200).json({
      success: true,
      message: 'Blog successfully updated',
      data: updateBlog
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Failed to update'
    })
  }
}