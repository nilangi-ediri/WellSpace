import express from "express"
import { addComments, createBlog, getAllBlog, getSingleBlog } from "../Controllers/blogController.js"

const router = express.Router()

router.post('/:doctorId', createBlog)
router.get('/', getAllBlog)
router.get('/:blogId', getSingleBlog)
router.post('/:postId/comments', addComments)

export default router