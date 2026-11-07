
import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

import "./index.css";

const container = document.getElementById("root");

const application = (
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, application);
} else {
  createRoot(container).render(application);
}
