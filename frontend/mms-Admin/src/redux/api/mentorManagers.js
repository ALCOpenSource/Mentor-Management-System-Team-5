import axios from "@/config/axios";

export const getAllMentorManagersApi = async (data) => await axios.get("/MentorManager/mentor-managers", data);
export const deleteMentorManagerApi = async (data) => await axios.delete(`/MentorManager/mentor-manager/${data}`, data);
export const getMentorManagerDetailsApi = async (data) =>
  await axios.get(`/MentorManager/mentor-manager/${data}`, data);
