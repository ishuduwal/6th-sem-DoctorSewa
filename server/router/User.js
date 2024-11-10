import express from 'express'
import { GetUser, LoginUser, SignupUser } from '../controller/User.js';


const router = express.Router();
router.post('/signup', SignupUser);
router.post('/login', LoginUser);
router.get('/', GetUser);
export default router