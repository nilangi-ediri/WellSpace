import express from "express"
import { createBlog, getAllBlog, getSingleBlog, updateBlog, deleteBlog } from "../Controllers/blogController.js"

const router = express.Router()

router.post('/:doctorId', createBlog)
router.get('/', getAllBlog)
router.get('/:blogId', getSingleBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)

export default router