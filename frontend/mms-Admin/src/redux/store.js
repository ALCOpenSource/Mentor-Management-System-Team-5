import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/AuthSlice";
import ModalReducer from "./Modal/ModalSlice";
import LoadingReducer from "./Loading/LoadingSlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    modal: ModalReducer,
    loading: LoadingReducer
  },
  devTools: process.env.NODE_ENV === "development" ? true : false
});

export default store;
