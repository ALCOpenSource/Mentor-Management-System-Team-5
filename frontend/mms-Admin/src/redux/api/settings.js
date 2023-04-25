import axios from "@/config/axios";

export const changePasswordApi = async (data) => await axios.put("/Account/change-password", data);
export const updateProfileApi = async (data) => await axios.put("/Account/update-profile", data);
export const editUserNotificationsApi = async (data) =>
  await axios.patch("/UserNotification/editusernotification", data);
export const getUserNotificationsApi = async (data) => await axios.get("/UserNotification/usernotification", data);
export const editUserPrivacyApi = async (data) => await axios.patch("/UserPrivacy/edituserprivacy", data);
export const getUserPrivacyApi = async (data) => await axios.get("/UserPrivacy/userprivacy", data);
