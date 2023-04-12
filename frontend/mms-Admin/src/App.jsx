import React from "react";
import { checkAuth } from "./utils/auth";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routes from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProSidebarProvider } from 'react-pro-sidebar';

checkAuth(store);

const App = () => {
  return (
    <ProSidebarProvider>
      <Provider store={store}>
        <ToastContainer autoClose={3000} />
        <Routes />
      </Provider>
    </ProSidebarProvider>
  );
};

export default App;
