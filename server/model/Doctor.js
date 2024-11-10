import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fee: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    }
})

const Doctor = new mongoose.model("Doctor", DoctorSchema);
export default Doctor;
