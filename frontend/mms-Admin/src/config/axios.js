/* eslint-disable no-param-reassign */
import axios from "axios";
import { getToken } from "@/utils/auth";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

instance.interceptors.request.use(
  async (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;
