import express from "express"
import { createBlog, getAllBlog, getSingleBlog, updateBlog } from "../Controllers/blogController.js"

const router = express.Router()

router.post('/:doctorId', createBlog)
router.get('/', getAllBlog)
router.get('/:blogId', getSingleBlog)
router.put('/:id', updateBlog)

export default router