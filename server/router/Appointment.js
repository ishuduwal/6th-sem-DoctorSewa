import express from 'express';
import { AddAppointment, GetAllAppointments, GetAppointment } from '../controller/Appointment.js';

const router = express.Router();

router.get('/get', GetAppointment);
router.get('/all', GetAllAppointments);
router.post('/book', AddAppointment);

export default router;
