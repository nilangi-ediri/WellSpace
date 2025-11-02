import express from 'express';
const router = express.Router();
import { getAboutInfo, updateAboutInfo } from '../Controllers/aboutController.js';

router.get('/', getAboutInfo);
router.put('/', updateAboutInfo);

export default router;
