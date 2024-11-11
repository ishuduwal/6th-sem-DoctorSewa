import * as api from '../api/Doctor'

export const GetDoctor = async () => {
    try {
        const { data } = await api.GetDoctor();
        return data
    } catch (error) {
        console.log(error)
    }
}

export const AddDoctor = async () => {
    try {
        const { data } = await api.AddDoctor(doctor);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const EditDoctor = async (updatedData) => {
    try {
        const { data } = await api.EditDoctor(updatedData);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const DeleteDoctor = async (doctorId) => {
    try {
        const { data } = await api.DeleteDoctor(doctorId);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const LoginDoctor = async (doctor) => {
    try {
        const { data } = await api.LoginDoctor(doctor);
        return data
    } catch (error) {
        console.log(error)
    }
}

export const GetDoctorById = async (id) => {
    try {
        const response = await api.GetDoctorById(id);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching doctor:", error);
    }
};