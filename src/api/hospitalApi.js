import axios from "axios";

const API_URL = "https://med-backend-7tg1.onrender.com/api/hospitals";

export const searchHospitals = async (specialization, lat, long, radius, token) => {
  return axios.get(`${API_URL}/search`, {
    headers: { Authorization: token },
    params: { specialization, lat, long, radius },
  });
};
