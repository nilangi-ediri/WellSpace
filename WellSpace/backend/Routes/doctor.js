import express from "express"
import { getSingleDoctor, getAllDoctor }
  from "../Controllers/doctorController.js"

const router = express.Router()

router.get('/', getAllDoctor)
router.get('/:id', getSingleDoctor)

export default router

