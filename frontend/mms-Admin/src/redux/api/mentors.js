import axios from "@/config/axios";

export const getAllMentorsApi = async (data) => await axios.get("/Mentors/mentors", data);
export const inviteMentorApi = async (data) => await axios.post("/Mentors/mentors/invitation", data);
export const registerMentorApi = async (data) => await axios.post("/Mentors/mentor-registration", data);
export const deleteMentorApi = async (data) => await axios.delete(`/Mentors/mentor/${data?.id}`, data);
