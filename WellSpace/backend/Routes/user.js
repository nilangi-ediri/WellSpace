import express from "express"
import {
  getSingleUser,
  getAllUser,
} from "../Controllers/userController.js"

const router = express.Router()

router.get('/', getAllUser)
router.get('/:id', getSingleUser)

export default router