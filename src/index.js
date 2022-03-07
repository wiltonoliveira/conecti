import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/global.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./providers/auth";
import { DataCompanyProvider } from "./providers/dataCompany";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <DataCompanyProvider>
        <App />
      </DataCompanyProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
