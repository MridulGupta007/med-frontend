import axios from "axios";

const API_URL = "https://med-backend-7tg1.onrender.com/api/auth";

export const signup = async (userData) => {
  return axios.post(`${API_URL}/signup`, userData);
};

export const login = async (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};
