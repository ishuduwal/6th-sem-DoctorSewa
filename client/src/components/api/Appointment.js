import axios from 'axios';

const URL = 'http://localhost:3001/appointment';

export const fetchAppointment = (email) => axios.get(`${URL}/get`, { params: { email } });

export const fetchAllAppointments = () => axios.get(`${URL}/all`);

export const bookAppointment = (doctorId, userId, date, time) =>
    axios.post(`${URL}/book`, { doctorId, userId, date, time });
