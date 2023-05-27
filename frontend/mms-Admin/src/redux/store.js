import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/AuthSlice";
import ModalReducer from "./Modal/ModalSlice";
import LoadingReducer from "./Loading/LoadingSlice";
import SettingsReducer from "./Settings/SettingsSlice";
import ReportsReducer from "./Reports/ReportsSlice";
import CriteriaSlice from "./Criteria/CriteriaSlice";
import MentorsSlice from "./Mentors/MentorsSlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    modal: ModalReducer,
    loading: LoadingReducer,
    settings: SettingsReducer,
    reports: ReportsReducer,
    criteria: CriteriaSlice,
    mentors: MentorsSlice
  },
  devTools: process.env.NODE_ENV === "development"
});

export default store;
