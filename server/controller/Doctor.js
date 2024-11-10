import mongoose from "mongoose"
import Doctor from "../model/Doctor.js"

export const GetDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.find()
        res.status(200).json(doctor)
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}

export const AddDoctor = async (req, res) => {
    const { name, email, password, fee, speciality, about, experience } = req.body
    try {
        let doctor = await Doctor.findOne({ name: name })
        if (doctor) { res.status(200).json({ message: "Doctor is already added" }) }
        else {
            const newDoctor = new Doctor({
                name, email, password, fee, speciality, about, experience
            })
            await newDoctor.save()
            res.status(201).json({ message: "New doctor added" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const DeleteDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Doctor id is missing' });
        }
        const doctor = await Doctor.findOneAndDelete(id);
        if (!doctor) {
            return res.status(404).json({ message: 'doctor not found' });
        }
        res.status(200).json({ message: 'Doctor deleted sucessfully' });
    } catch (error) {
        console.error('error deleting doctor:', error);
        res.status(500).json({ message: 'Error deleting doctor', error: error.message })
    }
}

export const EditDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, password, fee, speciality, about, experience } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return ResizeObserver.status(400).json({ message: 'Doctor ID is missing or invalid' });
        }
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            { name, email, password, fee, speciality, about, experience },
            { new: true }
        );
        if (!updatedDoctor) {
            return res.status(404).json({ message: 'doctor not found' });
        }
        res.status(200).json({ message: 'Doctor updated sucessfully', doctor: updatedDoctor });
    } catch (error) {
        console.error('Error updating doctor:', error);
        res.status(500).json({ message: 'Error updating doctor', error: error.message })
    }
}

export const DoctorLogin = async (req, res) => {
    const doctor = req.body;
    try {
        const doctorDB = await Doctor.findOne({ email: doctor.email, password: doctor.password })
        if (!doctorDB) return res.status(404).json(false);
        res.status(201).json(doctorDB);
    } catch (error) {
        res.status(404).json(false);
    }
}