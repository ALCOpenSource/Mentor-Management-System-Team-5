import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoadingState {
  loginLoading: boolean;
  forgotPasswordLoading: boolean;
  resetPasswordLoading: boolean;
}

const initialState: LoadingState = {
  loginLoading: false,
  forgotPasswordLoading: false,
  resetPasswordLoading: false
};

export const loadingSlice = createSlice({
  name: "loading",

  initialState,

  reducers: {
    loginLoading: (state, action: PayloadAction<boolean>) => {
      state.loginLoading = action.payload;
    },
    forgotPasswordLoading: (state, action: PayloadAction<boolean>) => {
      state.forgotPasswordLoading = action.payload;
    },
    resetPasswordLoading: (state, action: PayloadAction<boolean>) => {
      state.resetPasswordLoading = action.payload;
    }
  }
});


// Actions
export const { loginLoading, forgotPasswordLoading, resetPasswordLoading } = loadingSlice.actions;

export default loadingSlice.reducer;