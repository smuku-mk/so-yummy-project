import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles";
import { lightTheme, darkTheme } from "./styles/theme";
import { App } from "./components";
import store from './redux/store';

const Root = () => {
  const [theme, setTheme] = useState('dark');

   const toggleTheme = () => {
  setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
};
   

  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}> 
          <GlobalStyles />
          <App  toggleTheme={toggleTheme}  />
         </ThemeProvider> 
      </Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);