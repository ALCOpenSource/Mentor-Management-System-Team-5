import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllUserProfilesApi, updateProfileApi, getProfileApi } from "../api/profile";

import { getAllUserProfilesLoading, updateProfileLoading, getProfileLoading } from "@/redux/Loading/LoadingSlice";

const initialState = {
  error: false,
  getAllUserProfilesData: {},
  updateProfileData: {},
  getProfileData: {}
};

export const profileSlice = createSlice({
  name: "profile",

  initialState,

  reducers: {
    hasError: (state, action) => {
      state.error = action.payload;
    },

    getAllUserProfilesAction: (state, action) => {
      state.getAllUserProfilesData = action.payload;
    },

    updateProfileAction: (state, action) => {
      state.updateProfileData = action.payload;
    },

    getProfileAction: (state, action) => {
      state.getProfileData = action.payload;
    }
  }
});
export default profileSlice.reducer;

// Actions
const { hasError, getAllUserProfilesAction, updateProfileAction, getProfileAction } = profileSlice.actions;

export const getAllUserProfiles = (data) => async (dispatch) => {
  dispatch(getAllUserProfilesLoading(true));
  try {
    const response = await getAllUserProfilesApi(data);
    dispatch(getAllUserProfilesLoading(false));
    dispatch(getAllUserProfilesAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(getAllUserProfilesLoading(false));
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
