import axios from "axios";

const URL = "http://localhost:3001/user"

export const GetUser = () => axios.get(URL);
export const SignupUser = (user) => axios.post(`${URL}/signup`, user);
export const LoginUser = (user) => axios.post(`${URL}/login`, user); 