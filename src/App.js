import React, { Component } from "react";
import "./App.css";
import Login from "./layout/login";
import Main from "./layout/main";
import { AuthProvider } from "./js/AuthContext";

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
        {this.PAGES[this.state.currentPage]}
      </AuthProvider>
    );
  }
}

export default App;
