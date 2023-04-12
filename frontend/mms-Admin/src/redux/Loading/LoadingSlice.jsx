import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginLoading: false,
  forgotPasswordLoading: false,
  resetPasswordLoading: false
};

export const loadingSlice = createSlice({
  name: "loading",

  initialState,

  reducers: {
    loginLoading: (state, action) => {
      state.loginLoading = action.payload;
    },
    forgotPasswordLoading: (state, action) => {
      state.forgotPasswordLoading = action.payload;
    },
    resetPasswordLoading: (state, action) => {
      state.resetPasswordLoading = action.payload;
    }
  }
});


// Actions
export const { loginLoading, forgotPasswordLoading, resetPasswordLoading } = loadingSlice.actions;

export default loadingSlice.reducer;