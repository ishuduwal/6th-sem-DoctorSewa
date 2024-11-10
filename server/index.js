import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRouter from "./router/User.js"
import DoctorRouter from "./router/Doctor.js"

const app = express();
dotenv.config();
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use('/user', UserRouter);
app.use('/doctor', DoctorRouter);

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.mongodb).then(() =>
    app.listen(PORT, () => console.log(`server runnin on port ${PORT}`))).catch(err => console.log(err))