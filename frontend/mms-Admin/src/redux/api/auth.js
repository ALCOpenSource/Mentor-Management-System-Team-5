import axios from "@/config/axios";

export const loginApi = async (data) => await axios.post("login", data);
export const forgotPasswordApi = async (data) => await axios.post("forgot-password", data);
export const resetPasswordApi = async (data) => await axios.post("reset-password", data);

