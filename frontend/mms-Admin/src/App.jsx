import React from "react";
import { checkAuth } from "./utils/auth";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routes from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

checkAuth(store);

const App = () => {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={3000} />
      <Routes />
    </Provider>
  );
};

export default App;
