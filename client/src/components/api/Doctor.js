import axios from "axios";

const URL = "http://localhost:3001/doctor"

export const GetDoctor = () => axios.get(URL);
export const AddDoctor = (doctor) => axios.post(`${URL}/`, doctor);
export const EditDoctor = (doctor) => axios.put(`${URL}/${doctor._id}`, doctor);
export const DeleteDoctor = (id) => axios.delete(`${URL}/${id}`);
export const LoginDoctor = (doctor) => axios.post(`${URL}/login`, doctor); 