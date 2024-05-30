import express from 'express';
const router = express.Router();
import { sendBookingConfirmation, sendBookingReminder } from '../Controllers/notificationsController.js';

router.post('/booking-confirmation', sendBookingConfirmation);//notify parent
router.post('/booking-reminder', sendBookingReminder);//notify doctor

export default router;
