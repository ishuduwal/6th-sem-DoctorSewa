import express from 'express'
import { DeleteUser, GetUser, LoginUser, SignupUser } from '../controller/User.js';


const router = express.Router();
router.post('/signup', SignupUser);
router.post('/login', LoginUser);
router.get('/', GetUser);
router.delete('/:id', DeleteUser);
export default router