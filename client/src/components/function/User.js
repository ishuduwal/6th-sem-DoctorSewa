import * as api from '../api/User'

export const GetUser = async () => {
    try {
        const { data } = await api.GetUser();
        return data
    } catch (error) {
        console.log(error)
    }
}

export const SignupUser = async (user) => {
    try {
        const { data } = await api.SignupUser(user);
        return data
    } catch (error) {
        console.log(error)
    }
}

export const LoginUser = async (user) => {
    try {
        const { data } = await api.LoginUser(user);
        return data
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const DeleteUser = async (id) => {
    try {
        const { data } = await api.DeleteUser(id);
        return data;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
};
