import express from "express"
import { getAllComments, createComment, deleteComment, getCommentsByBlogId } from "../Controllers/commentController.js"

const router = express.Router()

router.route('/:postId').post(createComment)
router.get('/:postId', getCommentsByBlogId)
router.get('/', getAllComments)
router.delete('/:id', deleteComment)

export default router