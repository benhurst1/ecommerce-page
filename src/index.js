import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import App from "./App";
import BusketContext from "./lib/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BusketContext>
      <App />
    </BusketContext>
  </React.StrictMode>
);
