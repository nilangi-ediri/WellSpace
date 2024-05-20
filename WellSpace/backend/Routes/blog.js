import express from "express"
import { createBlog, getAllBlog, getSingleBlog, updateBlog, deleteBlog } from "../Controllers/blogController.js"
import commentRouter from "./comment.js"

const router = express.Router()

router.post('/:doctorId', createBlog)
router.get('/', getAllBlog)
router.get('/:blogId', getSingleBlog)
router.put('/:id', updateBlog)
router.use('/:blogId/comments', commentRouter)
router.delete('/:id', deleteBlog)

export default router