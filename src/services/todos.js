import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:3030";

export const getTodos = async (token) => {
    const res = await axios.get(`${apiUrl}/todos`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res;
};

export const createTodo = async (title, token) => {
    try {
        const res = await axios.post(`${apiUrl}/todos`, {title}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};
export const updateTodo = async (id, completed, token) => {
    try {
        const url = !completed ? `${apiUrl}/todos/${id}/completed` : `${apiUrl}/todos/${id}/uncompleted`;
        const res = await axios.patch(url, {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const deleteTodo = async (id, token) => {
    try {
        const res = await axios.delete(`${apiUrl}/todos/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res.data;
    } catch (error) {
        throw error.response.data;
    }
};
