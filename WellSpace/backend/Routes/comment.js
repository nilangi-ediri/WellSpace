import express from "express"
import { getAllComments, createComment } from "../Controllers/commentController.js"

const router = express.Router({
  mergeParams: true
})

router.route('/').get(getAllComments).post(createComment)

export default router