import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Auth
  loginLoading: false,
  forgotPasswordLoading: false,
  resetPasswordLoading: false,

  //Settings
  changePasswordLoading: false,
  updateProfileLoading: false,
  getProfileLoading: false,
  editUserNotificationsLoading: false,
  getUserNotificationsLoading: false,
  editUserPrivacyLoading: false,
  getUserPrivacyLoading: false
};

export const loadingSlice = createSlice({
  name: "loading",

  initialState,

  reducers: {
    //Auth
    loginLoading: (state, action) => {
      state.loginLoading = action.payload;
    },
    forgotPasswordLoading: (state, action) => {
      state.forgotPasswordLoading = action.payload;
    },
    resetPasswordLoading: (state, action) => {
      state.resetPasswordLoading = action.payload;
    },

    //Settings
    changePasswordLoading: (state, action) => {
      state.changePasswordLoading = action.payload;
    },
    updateProfileLoading: (state, action) => {
      state.updateProfileLoading = action.payload;
    },
    getProfileLoading: (state, action) => {
      state.getProfileLoading = action.payload;
    },
    editUserNotificationsLoading: (state, action) => {
      state.editUserNotificationsLoading = action.payload;
    },
    getUserNotificationsLoading: (state, action) => {
      state.getUserNotificationsLoading = action.payload;
    },
    editUserPrivacyLoading: (state, action) => {
      state.editUserPrivacyLoading = action.payload;
    },
    getUserPrivacyLoading: (state, action) => {
      state.getUserPrivacyLoading = action.payload;
    }
  }
});

// Actions
export const {
  loginLoading,
  forgotPasswordLoading,
  resetPasswordLoading,
  changePasswordLoading,
  updateProfileLoading,
  getProfileLoading,
  editUserNotificationsLoading,
  getUserNotificationsLoading,
  editUserPrivacyLoading,
  getUserPrivacyLoading
} = loadingSlice.actions;

export default loadingSlice.reducer;
