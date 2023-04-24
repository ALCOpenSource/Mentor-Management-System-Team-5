import axios from "@/config/axios";

export const loginApi = async (data) => await axios.post("login", data);
export const forgotPasswordApi = async (data) => await axios.post("forget-password", data);
export const resetPasswordApi = async (data) => await axios.post("reset-password", data);
export const refreshAccessTokenApi = async (data) => await axios.post("refresh-token", data);
