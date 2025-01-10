import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchLocations = async () => {
  const response = await api.get('/locations/');
  return response.data;
};

export const fetchTrainees = async () => {
  const response = await api.get('/trainees/');
  return response.data;
};

export const fetchScores = async () => {
  const response = await api.get('/scores/');
  return response.data;
};

export const createScore = async (scoreData) => {
  const response = await api.post('/scores/', scoreData);
  return response.data;
};

export default api;