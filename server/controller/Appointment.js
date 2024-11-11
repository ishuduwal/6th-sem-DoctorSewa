import Appointment from "../model/Appointment.js";

export const GetAppointment = async (req, res) => {
    const { email } = req.body;
    try {
        const appointment = await Appointment.findOne({ 'user.email': email })
            .populate('doctor', 'name specialty fee')
            .populate('user', 'firstname lastname');

        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const GetAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .populate('doctor', 'name specialty fee')
            .populate('user', 'firstname lastname');

        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const AddAppointment = async (req, res) => {
    const { doctorId, userId, date, time } = req.body;
    try {
        const existingAppointment = await Appointment.findOne({ doctor: doctorId, date, time });
        if (existingAppointment) {
            return res.status(400).json({ message: 'Appointment already exists at this time' });
        }
        const appointment = new Appointment({
            doctor: doctorId,
            user: userId,
            date,
            time
        });

        await appointment.save();

        const populatedAppointment = await Appointment.findById(appointment._id)
            .populate('doctor', 'name specialty fee')
            .populate('user', 'firstname lastname');

        res.status(201).json({ message: 'Appointment booked successfully', appointment: populatedAppointment });
    } catch (error) {
        console.error('Error booking appointment:', error);
        res.status(500).json({ error: error.message });
    }
};