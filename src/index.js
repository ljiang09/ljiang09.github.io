import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

function loadGoogleFonts() {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=Ubuntu&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);
}

// Call the function before rendering your app
loadGoogleFonts();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
