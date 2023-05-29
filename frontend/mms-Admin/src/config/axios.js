/* eslint-disable no-param-reassign */
import axios from "axios";
import { getToken } from "@/utils/auth";
import { refreshAccessToken } from "@/redux/Auth/AuthSlice";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
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

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await refreshAccessToken();
        const token = getToken();

        originalRequest.headers.Authorization = `Bearer ${token}`;

        return instance(originalRequest);
      } catch (error) {
        console.error(error);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
