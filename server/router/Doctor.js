import express from 'express';
import { AddDoctor, DeleteDoctor, DoctorLogin, EditDoctor, GetDoctor } from "../controller/Doctor.js";

const router = express.Router();

router.post('/', AddDoctor);
router.get('/', GetDoctor);
router.put('/:id', EditDoctor);
router.delete('/:id', DeleteDoctor);
router.post('/login', DoctorLogin);
export default router