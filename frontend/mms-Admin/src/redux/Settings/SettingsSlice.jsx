import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  changePasswordApi,
  updateProfileApi,
  getProfileApi,
  editUserNotificationsApi,
  getUserNotificationsApi,
  editUserPrivacyApi,
  getUserPrivacyApi,
<<<<<<< HEAD
  getGeneralFaqApi,
  getTechnicalFaqApi
=======
  sendSupportMessageApi
>>>>>>> develop
} from "../api/settings";

import {
  changePasswordLoading,
  updateProfileLoading,
  getProfileLoading,
  editUserNotificationsLoading,
  getUserNotificationsLoading,
  editUserPrivacyLoading,
  getUserPrivacyLoading,
<<<<<<< HEAD
  getGeneralFaqLoading,
  getTechnicalFaqLoading
=======
  sendSupportMessageLoading
>>>>>>> develop
} from "@/redux/Loading/LoadingSlice";

const initialState = {
  error: false,
  changePasswordData: {},
  updateProfileData: {},
  getProfileData: {},
  editUserNotificationsData: {},
  getUserNotificationsData: {},
  editUserPrivacyData: {},
  getUserPrivacyData: {},
<<<<<<< HEAD
  getGeneralFaqData: {},
  getTechnicalFaqData: {}
=======
  sendSupportMessageData: {}
>>>>>>> develop
};

export const settingsSlice = createSlice({
  name: "settings",

  initialState,

  reducers: {
    hasError: (state, action) => {
      state.error = action.payload;
    },

    changePasswordAction: (state, action) => {
      state.changePasswordData = action.payload;
    },

    updateProfileAction: (state, action) => {
      state.updateProfileData = action.payload;
    },

    getProfileAction: (state, action) => {
      state.getProfileData = action.payload;
    },

    editUserNotificationsAction: (state, action) => {
      state.editUserNotificationsData = action.payload;
    },

    getUserNotificationsAction: (state, action) => {
      state.getUserNotificationsData = action.payload;
    },

    editUserPrivacyAction: (state, action) => {
      state.editUserPrivacyData = action.payload;
    },

    getUserPrivacyAction: (state, action) => {
      state.getUserPrivacyData = action.payload;
    },

<<<<<<< HEAD
    getGeneralFaqAction: (state, action) => {
      state.getGeneralFaqData = action.payload;
    },

    getTechnicalFaqAction: (state, action) => {
      state.getTechnicalFaqData = action.payload;
=======
    sendSupportMessageAction: (state, action) => {
      state.sendSupportMessageData = action.payload;
>>>>>>> develop
    }
  }
});
export default settingsSlice.reducer;

// Actions
const {
  hasError,
  changePasswordAction,
  updateProfileAction,
  getProfileAction,
  editUserNotificationsAction,
  getUserNotificationsAction,
  editUserPrivacyAction,
  getUserPrivacyAction,
<<<<<<< HEAD
  getGeneralFaqAction,
  getTechnicalFaqAction
=======
  sendSupportMessageAction
>>>>>>> develop
} = settingsSlice.actions;

export const changePassword = (data) => async (dispatch) => {
  dispatch(changePasswordLoading(true));

  try {
    const response = await changePasswordApi(data);
    dispatch(changePasswordLoading(false));
    dispatch(changePasswordAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(changePasswordLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};
export const updateProfile = (data) => async (dispatch) => {
  dispatch(updateProfileLoading(true));

  try {
    const response = await updateProfileApi(data);
    dispatch(updateProfileLoading(false));
    dispatch(updateProfileAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data);
    dispatch(updateProfileLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};

export const getProfile = (data) => async (dispatch) => {
  dispatch(getProfileLoading(true));

  try {
    const response = await getProfileApi(data);
    dispatch(getProfileLoading(false));
    dispatch(getProfileAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data);
    dispatch(getProfileLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};

export const editUserNotifications = (data) => async (dispatch) => {
  dispatch(editUserNotificationsLoading(true));
  try {
    const response = await editUserNotificationsApi(data);
    // toast.success(response?.data?.data?.message);
    toast.success("Notification settings updated successfully");
    dispatch(editUserNotificationsLoading(false));
    dispatch(editUserNotificationsAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(editUserNotificationsLoading(false));
    return { success: false };
  }
};

export const getUserNotifications = () => async (dispatch) => {
  dispatch(getUserNotificationsLoading(true));
  try {
    const response = await getUserNotificationsApi();
    toast.success(response?.data?.data?.message);
    dispatch(getUserNotificationsLoading(false));
    dispatch(getUserNotificationsAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getUserNotificationsLoading(false));
    return { success: false };
  }
};

export const editUserPrivacy = (data) => async (dispatch) => {
  dispatch(editUserPrivacyLoading(true));
  try {
    const response = await editUserPrivacyApi(data);
    // toast.success(response?.data?.data?.message);
    toast.success("Privacy settings updated successfully");
    dispatch(editUserPrivacyLoading(false));
    dispatch(editUserPrivacyAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(editUserPrivacyLoading(false));
    return { success: false };
  }
};

export const getUserPrivacy = () => async (dispatch) => {
  dispatch(getUserPrivacyLoading(true));
  try {
    const response = await getUserPrivacyApi();
    dispatch(getUserPrivacyLoading(false));
    dispatch(getUserPrivacyAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getUserPrivacyLoading(false));
    return { success: false };
  }
};

<<<<<<< HEAD
export const getGeneralFaq = () => async (dispatch) => {
  dispatch(getGeneralFaqLoading(true));
  try {
    const response = await getGeneralFaqApi();
    dispatch(getGeneralFaqLoading(false));
    dispatch(getGeneralFaqAction(response?.data?.data));
=======
export const sendSupportMessage = (data) => async (dispatch) => {
  dispatch(sendSupportMessageLoading(true));
  try {
    const response = await sendSupportMessageApi(data);
    dispatch(sendSupportMessageLoading(false));
    dispatch(sendSupportMessageAction(response?.data?.data));
>>>>>>> develop
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
<<<<<<< HEAD
    dispatch(getGeneralFaqLoading(false));
    return { success: false };
  }
};

export const getTechnicalFaq = () => async (dispatch) => {
  dispatch(getTechnicalFaqLoading(true));
  try {
    const response = await getTechnicalFaqApi();
    dispatch(getTechnicalFaqLoading(false));
    dispatch(getTechnicalFaqAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getTechnicalFaqLoading(false));
    return { success: false };
  }
};
=======
    dispatch(sendSupportMessageLoading(false));
    return { success: false };
  }
};
>>>>>>> develop
