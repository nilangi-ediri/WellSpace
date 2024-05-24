import express from "express"
import { createReply, deleteReply, getReplyByCommentId } from "../Controllers/replyController.js"

const router = express.Router()

router.route('/:commentId').post(createReply)
router.get('/:commentId', getReplyByCommentId)
router.delete('/:id', deleteReply)

export default router
