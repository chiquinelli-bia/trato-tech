import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { createStandaloneToast } from "@chakra-ui/toast";

const { ToastContainer } = createStandaloneToast();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
    <ToastContainer />
  </React.StrictMode>,
);
