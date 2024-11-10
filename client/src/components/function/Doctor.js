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