import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { NavBar } from "./components/navBar";
import Router from "./router";
import { Provider } from "react-redux";
import store from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
);
