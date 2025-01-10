import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const useTrainees = () => {
  return useQuery({
    queryKey: ['trainees'],
    queryFn: () => axios.get(`${API_URL}/trainees/`).then(res => res.data)
  });
};

export const useScores = () => {
  return useQuery({
    queryKey: ['scores'],
    queryFn: () => axios.get(`${API_URL}/scores/`).then(res => res.data)
  });
};

export const useAddTrainee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => axios.post(`${API_URL}/trainees/`, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['trainees'] })
  });
};

export const useAddScore = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => axios.post(`${API_URL}/scores/`, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['scores'] })
  });
};

// Combined hook that returns all API functions
export const useApi = () => {
  const scores = useScores();
  const trainees = useTrainees();
  const addTrainee = useAddTrainee();
  const addScore = useAddScore();

  return {
    scores,
    trainees,
    addTrainee,
    addScore
  };
};