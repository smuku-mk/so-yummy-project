import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./styles";
import { App } from "./components";
// import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    {/* <ThemeProvider theme={lightTheme}> */}
      <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
