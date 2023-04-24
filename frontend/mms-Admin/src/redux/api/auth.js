import axios from "@/config/axios";

export const loginApi = async (data) => await axios.post("/Account/login", data);
export const forgotPasswordApi = async (data) => await axios.post("/Account/forget-password", data);
export const resetPasswordApi = async (data) => await axios.post("/Account/reset-password", data);
export const refreshAccessTokenApi = async (data) => await axios.post("/Account/refresh-token", data);
