
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";

import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

export function render(url) {
  const application = (
    <StaticRouter location={url}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StaticRouter>
  );

  return renderToString(application);
}
