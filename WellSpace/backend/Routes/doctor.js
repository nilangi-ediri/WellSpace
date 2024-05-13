import express from "express"
import { getSingleDoctor, getAllDoctor, updateDoctor }
  from "../Controllers/doctorController.js"

const router = express.Router()

router.get('/', getAllDoctor)
router.get('/:id', getSingleDoctor)
router.put('/:id', updateDoctor)

export default router

