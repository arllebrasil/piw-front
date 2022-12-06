import axios from "axios"
import { Usuario } from "../context/auth/AuthContext";

const api = axios.create({
    baseURL:"http://localhost:3000"
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers!["token"] = `${token}`
    }
    return config;
});

export async function signin(data:Usuario){

}

export default api;
