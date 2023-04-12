import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Auth / User
  loginLoading: false,
  forgotPasswordLoading: false,
  resetPasswordLoading: false
};

export const loadingSlice = createSlice({
  name: "loading",

  initialState,

  reducers: {
    loginAction: (state, action) => {
      state.loginLoading = action.payload;
    },
    forgotPasswordAction: (state, action) => {
      state.forgotPasswordLoading = action.payload;
    },
    resetPasswordAction: (state, action) => {
      state.resetPasswordLoading = action.payload;
    }
  }
});
export default loadingSlice.reducer;

// Actions
const { loginAction, forgotPasswordAction, resetPasswordAction } = loadingSlice.actions;

export const loginLoading = (data) => async (dispatch) => {
  return dispatch(loginAction(data));
};

export const forgotPasswordLoading = (data) => (dispatch) => {
  return dispatch(forgotPasswordAction(data));
};

export const resetPasswordLoading = (data) => (dispatch) => {
  return dispatch(resetPasswordAction(data));
};
