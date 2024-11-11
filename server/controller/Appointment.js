import Appointment from "../model/Appointment.js";

// Get appointment by user email
export const GetAppointment = async (req, res) => {
    const { email } = req.body;
    try {
        const appointment = await Appointment.findOne({ 'user.email': email });
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all appointments
export const GetAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find().populate('doctor user', 'name email');
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a new appointment
export const AddAppointment = async (req, res) => {
    const { doctorId, userId, date, time } = req.body;
    try {
        // Check if the appointment already exists for the given date and time
        const existingAppointment = await Appointment.findOne({ doctor: doctorId, date, time });
        if (existingAppointment) {
            return res.status(400).json({ message: 'Appointment already exists at this time' });
        }

        // Create a new appointment
        const appointment = new Appointment({
            doctor: doctorId,
            user: userId,
            date,
            time
        });

        await appointment.save();
        res.status(201).json({ message: 'Appointment booked successfully', appointment });
    } catch (error) {
        console.error('Error booking appointment:', error);
        res.status(500).json({ error: error.message });
    }
};
