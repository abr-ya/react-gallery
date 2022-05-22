import React from "react";
import ReactDOM from "react-dom/client";
import "regenerator-runtime/runtime";
import { AuthContextProvider } from "./context/AuthContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthContextProvider>,
);
