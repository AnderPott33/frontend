import axios from 'axios';

const API_URL = 'https://backend-production-722c.up.railway.app/api/auth';

export const fetchUsuarios = async (token) => {
  const res = await axios.get(`${API_URL}/`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  return res.data;
};