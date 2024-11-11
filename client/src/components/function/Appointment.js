import * as api from '../api/Appointment';

export const GetAppointment = async (email) => {
    try {
        const { data } = await api.fetchAppointment(email);
        return data;
    } catch (error) {
        console.error('Error fetching appointment:', error);
        throw error;
    }
};

export const GetAllAppointments = async () => {
    try {
        const { data } = await api.fetchAllAppointments();
        // Similarly, return the data from the response that includes doctor and user details
        return data;
    } catch (error) {
        console.error('Error fetching all appointments:', error);
        throw error;
    }
};

export const BookAppointment = async (doctorId, userId, date, time) => {
    try {
        const { data } = await api.bookAppointment(doctorId, userId, date, time);
        // After the appointment is booked, the response will include doctor and user details
        return data;
    } catch (error) {
        console.error('Error booking appointment:', error);
        throw error;
    }
};
