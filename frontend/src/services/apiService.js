import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1";

const apiService = axios.create({
    baseURL: BASE_URL,
})

export const registerUser = async () => {
    try {
        const response = await apiService.post('/users/register');
        return response.data;
    } catch (error) {
        throw error;
    }
};