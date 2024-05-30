import express from 'express';
const router = express.Router();
import { getAvailableSlots, createBooking, getAllDoctors, getDoctorDetails } from '../Controllers/bookingController.js';

router.get('/available-slots', getAvailableSlots);
router.post('/', createBooking);
router.get('/doctors', getAllDoctors);
router.get('/doctors/:doctorId', getDoctorDetails);

export default router;
