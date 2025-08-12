import axios from 'axios';
import { ENV } from '../api/env';

export const apiClient = axios.create({
  baseURL: ENV.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${ENV.VITE_TMDB_HEADER}`,
  },
});
