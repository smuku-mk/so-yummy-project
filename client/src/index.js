import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles";
import { lightTheme, darkTheme } from "./styles";
import { App } from "./components";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const Root = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <BrowserRouter basename="/">
            <App toggleTheme={toggleTheme} />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
