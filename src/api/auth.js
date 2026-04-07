import axios from 'axios';
const API = import.meta.env.VITE_API_URL;

const API_URL = API;

export const fetchUsuarios = async (token) => {
  const res = await axios.get(`${API_URL}/`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  return res.data;
};