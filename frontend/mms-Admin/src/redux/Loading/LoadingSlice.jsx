import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  //Auth
  loginLoading: false,
  forgotPasswordLoading: false,
  resetPasswordLoading: false,

  //Settings
  changePasswordLoading: false
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
    }
  }
});

// Actions
export const { loginLoading, forgotPasswordLoading, resetPasswordLoading, changePasswordLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
