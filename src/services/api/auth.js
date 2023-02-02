import axios from "axios";

const BASE_URL = 'https://goit-project-petly-backend.onrender.com/';

const instance = axios.create({
    baseURL: BASE_URL,
});

const token = {
    set(token) {
        instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        instance.defaults.headers.common.Authorization = "";
    }
};

export const register = async (signupData) => {    
    const { data } = await instance.post("/api/users/register", signupData);
    console.log(data);
    return data;
}

export const login = async (loginData) => {
    const { data } = await instance.post("/api/users/login", loginData);
    token.set(data.token);
    return data;
}

export const logout = async () => {
    const { data } = await instance.post("/api/users/logout");
    token.unset();
    return data;
}

export const getCurrentUser = async (persistedToken) => {
    token.set(persistedToken);
    const data = await instance.get("/api/users/current");
    return data;
}