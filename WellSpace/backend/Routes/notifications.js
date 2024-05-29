import express from 'express';
const router = express.Router();
import { sendBookingConfirmation, sendBookingReminder } from '../Controllers/notificationsController.js';

router.post('/booking-confirmation', sendBookingConfirmation);
router.post('/booking-reminder', sendBookingReminder);

export default router;
