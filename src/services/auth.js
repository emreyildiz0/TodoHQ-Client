import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3030";

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${apiUrl}/auth/login`, {email, password});
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const signup = async (name, email, password) => {
    try {
        const response = await axios.post(`${apiUrl}/auth/signup`, {name, email, password});
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};
