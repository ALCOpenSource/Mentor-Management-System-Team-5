import axios from "@/config/axios";

export const loginApi = async (data: Record<string, unknown>) => await axios.post("login", data);
export const forgotPasswordApi = async (data: Record<string, unknown>) => await axios.post("forgot-password", data);
export const resetPasswordApi = async (data: Record<string, unknown>) => await axios.post("reset-password", data);

