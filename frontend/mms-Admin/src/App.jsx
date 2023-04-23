import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { checkAuth } from "./utils/auth";
import store from "./redux/store";
import Routes from "./routes/Routes";
import "react-toastify/dist/ReactToastify.css";
import { ProSidebarProvider } from "react-pro-sidebar";

checkAuth();

function App() {
  return (
    <ProSidebarProvider>
      <Provider store={store}>
        <ToastContainer autoClose={3000} />
        <Routes />
      </Provider>
    </ProSidebarProvider>
  );
}

export default App;
