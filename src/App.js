import React, { Component } from "react";
import "./App.css";
import Login from "./layout/login";
import Main from "./layout/main";
import { AuthContext } from "./js/AuthContext";

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
      <AuthContext.Provider
        value={{
          login: (email, password) => {
            console.log("Context::login is called");
            this.isLoggedIn = true;
          },

          logout: () => {
            console.log("Context::logout is called");
            this.isLoggedIn = false;
          },

          isLoggedIn: false,
        }}
      >
        {this.PAGES[this.state.currentPage]}
      </AuthContext.Provider>
    );
  }
}

export default App;
