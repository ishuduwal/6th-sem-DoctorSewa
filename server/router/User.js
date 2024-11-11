import express from 'express'
import { DeleteUser, GetUser, GetUserById, LoginUser, SignupUser } from '../controller/User.js';


const router = express.Router();
router.post('/signup', SignupUser);
router.post('/login', LoginUser);
router.get('/', GetUser);
router.delete('/:id', DeleteUser);
router.get("/:id", GetUserById);
export default router