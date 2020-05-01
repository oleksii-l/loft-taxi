import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import Login from "./layout/login";
import Main from "./layout/main";
import { AuthProvider } from "./js/AuthContext";
import { theme } from "loft-taxi-mui-theme";

class App extends Component {
  state = { currentPage: "login" };

  navigateTo = (currentPage) => {
    this.setState({ currentPage });
  };

  PAGES = {
    login: <Login navigateTo={this.navigateTo} />,
    main: <Main navigateTo={this.navigateTo} />,
  };

  render() {
    return (
      <AuthProvider>
        <MuiThemeProvider theme={theme}>
          {this.PAGES[this.state.currentPage]}
        </MuiThemeProvider>
      </AuthProvider>
    );
  }
}

export default App;
