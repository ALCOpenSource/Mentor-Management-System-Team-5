import axios from "@/config/axios";

export const getAllUserProfilesApi = async (data) => await axios.get("/Profile/get-all-profiles", data);
export const updateProfileApi = async (data) => await axios.put("/Profile/update-profile", data);
export const getProfileApi = async (data) => await axios.get("/Profile/get-profile", data);
