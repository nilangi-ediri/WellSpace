import express from "express"
import { getAllComments, createComment, deleteComment } from "../Controllers/commentController.js"

const router = express.Router({
  mergeParams: true
})

router.route('/').get(getAllComments).post(createComment)
router.delete('/:id', deleteComment)

export default router