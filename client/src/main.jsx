import React from "react";
import ReactDOM from "react-dom/client";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faBars, faXmark);

import App from "./App.jsx";
import "./assets/styles/style.css";
import "./assets/styles/queries.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
