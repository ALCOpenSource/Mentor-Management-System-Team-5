import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { checkAuth } from "./utils/auth";
import store from "./redux/store";
import Routes from "./routes/Routes";
import "react-toastify/dist/ReactToastify.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import { GoogleOAuthProvider } from "@react-oauth/google";

checkAuth();

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_WEB_CLIENT_ID}>
      <ProSidebarProvider>
        <Provider store={store}>
          <ToastContainer autoClose={3000} />
          <Routes />
        </Provider>
      </ProSidebarProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
