import axios from 'axios';
import { toast } from 'sonner';
import { env } from '../utils/env';
import { formatApiError } from '@/utils/format-api-error';

export const apiClient = axios.create({
  baseURL: `${env.VITE_API_URL}/api`,
  withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  return config;
});

apiClient.interceptors.response.use(
  (config) => config,
  (error: Error) => {
    toast.error(formatApiError(error));
    throw error;
  },
);
