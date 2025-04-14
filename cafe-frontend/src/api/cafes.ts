import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const fetchCafes = async () => {
  const response = await axios.get(`${API_URL}/cafes`);
  return response.data;
};
