import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/Mukta-Regular.ttf";
import "./assets/fonts/Mukta-Bold.ttf";
import "./assets/fonts/Mukta-Medium.ttf";
import "./assets/fonts/Mukta-SemiBold.ttf";
import "./assets/fonts/Mukta-Light.ttf";
import "./assets/fonts/Mukta-ExtraLight.ttf";
import "./assets/fonts/Mukta-ExtraBold.ttf";

import "./styles/global/flexAndGrid.scss";
import "./styles/global/variables.scss";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
