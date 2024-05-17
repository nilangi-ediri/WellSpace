import express from "express"
import { createBlog, getAllBlog, getSingleBlog, updateBlog, addComments } from "../Controllers/blogController.js"
import commentRouter from "./comment.js"

const router = express.Router()

router.post('/:doctorId', createBlog)
router.get('/', getAllBlog)
router.get('/:blogId', getSingleBlog)
router.post('/:postId/comments', addComments)
router.put('/:id', updateBlog)
router.use('/:blogId/comments', commentRouter)

export default router