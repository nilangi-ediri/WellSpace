import express from "express"
import {
  getSingleUser,
  getAllUser,
  updateUser,
} from "../Controllers/userController.js"

const router = express.Router()

router.get('/', getAllUser)
router.get('/:id', getSingleUser)
router.put('/:id', updateUser)

export default router