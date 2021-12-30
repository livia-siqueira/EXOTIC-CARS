import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { GlobalStyle } from "./shared/styles/global";
import { ThemeProvider } from "styled-components";
import { DefaultThemeExoticCars } from "./shared/styles/theme";
import { Home } from "./screens/Cars";
import { RouterApp } from "./routes";

function App() {
  return (
    <>
    
    <ThemeProvider theme={DefaultThemeExoticCars}>
      <GlobalStyle />
      <Provider store={store}>
        <RouterApp/>
      </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
