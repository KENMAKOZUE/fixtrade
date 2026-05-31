import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const listingsAPI = {
  create: (data: any) => apiClient.post('/listings', data),
  getAll: () => apiClient.get('/listings'),
  getById: (id: string) => apiClient.get(`/listings/${id}`),
  update: (id: string, data: any) => apiClient.put(`/listings/${id}`, data),
  delete: (id: string) => apiClient.delete(`/listings/${id}`),
};

export default apiClient;
