import axios from "@/config/axios";

export const changePasswordApi = async (data) => {
  return await axios.put("/Account/change-password", data);
};

export const updateProfileApi = async (data) => {
  return await axios.put("/Account/update-profile", data);
};

export const editUserNotificationsApi = async (data) => {
  return await axios.patch("/UserNotification/edituserprivacy", data);
};

export const getUserNotificationsApi = async (data) => {
  return await axios.get("/UserNotification/usernotification", data);
};

export const editUserPrivacyApi = async (data) => {
  return await axios.patch("/UserPrivacy/edit-user-privacy", data);
};

export const getUserPrivacyApi = async (data) => {
  return await axios.get("/UserPrivacy/user-privacy", data);
};
