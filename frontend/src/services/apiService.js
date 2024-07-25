import axios from "axios";

const BASE_URL = "http://localhost:3000";

const apiService = axios.create({
    baseURL: BASE_URL,
})

export const registerUser = async (data) => {
    try {
        const response = await apiService.post(`/api/users/register`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};