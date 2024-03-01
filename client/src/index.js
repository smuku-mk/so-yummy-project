import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles";
import { App } from "./components";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";
import { toggleTheme } from "./redux/theme/themeSlice";
import store from "./redux/store";

const Main = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <BrowserRouter basename="/">
          <App toggleTheme={toggleTheme} />
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  );
};

const Root = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Main />
      </Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
