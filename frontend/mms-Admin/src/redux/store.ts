// import { configureStore } from "@reduxjs/toolkit";
// import AuthReducer from "./Auth/AuthSlice";
// import ModalReducer from "./Modal/ModalSlice";
// import LoadingReducer from "./Loading/LoadingSlice";

// const store = configureStore({
//   reducer: {
//     auth: AuthReducer,
//     modal: ModalReducer,
//     loading: LoadingReducer
//   },
//   devTools: process.env.NODE_ENV === "development" ? true : false
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/AuthSlice";
import ModalReducer from "./Modal/ModalSlice";
import LoadingReducer from "./Loading/LoadingSlice";

const store= configureStore({
  reducer: {
    auth: AuthReducer,
    modal: ModalReducer,
    loading: LoadingReducer
  },
  devTools: process.env.NODE_ENV === "development" ? true : false
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export default store;





