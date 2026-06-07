import axios from 'axios';

const BASE_URL = 'https://notehub-public.goit.study/api';

export const notehubApi = axios.create({
  baseURL: BASE_URL,
});

notehubApi.interceptors.request.use(config => {
  const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});