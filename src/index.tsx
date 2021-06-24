import React from "react";
import ReactDOM from "react-dom";
import Modal from 'react-modal'
import App from "./App";

import "./services/firebase";

Modal.setAppElement("#root")

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
