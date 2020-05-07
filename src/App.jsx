import React from "react";
import { BrowserRouter } from "react-router-dom";

import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";

import MainPage from "./layout/MainPage";
import Header from "./components/common/Header";

export class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <MainPage />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
