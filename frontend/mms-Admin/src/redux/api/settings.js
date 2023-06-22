import axios from "@/config/axios";

export const changePasswordApi = async (data) => {
  return await axios.put("/Account/change-password", data);
};

export const editUserNotificationsApi = async (data) => {
  return await axios.patch("/UserNotification/edit-user-notification", data);
};

export const getUserNotificationsApi = async (data) => {
  return await axios.get("/UserNotification/user-notification", data);
};

export const editUserPrivacyApi = async (data) => {
  return await axios.patch("/UserPrivacy/edit-user-privacy", data);
};

export const getUserPrivacyApi = async (data) => {
  return await axios.get("/UserPrivacy/user-privacy", data);
};

export const getGeneralFaqApi = async () => {
  return await axios.get("/FAQ/generalFAQ");
};

export const getTechnicalFaqApi = async () => {
  return await axios.get("/FAQ/technicalFAQ");
};

export const sendSupportMessageApi = async (data) => {
  return await axios.post("/Support/support", data);
};
