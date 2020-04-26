import React, { Component } from "react";
import "../css/login.css";
import LoginForm from "../components/loginForm";
import Registration from "../components/registration";
import PropTypes from "prop-types";
import { AuthContext } from "../js/AuthContext";

export default class Login extends Component {
  state = { currentPage: "login" };

  setSection = (section) => {
    this.setState({ currentPage: section });
  };

  SECTIONS = {
    login: (
      <LoginForm
        navigateTo={this.props.navigateTo}
        switchToDialog={this.setSection}
      />
    ),
    registration: (
      <Registration
        navigateTo={this.props.navigateTo}
        switchToDialog={this.setSection}
      />
    ),
  };

  render() {
    console.log(this.props);
    const Section = this.SECTIONS[this.state.currentPage];
    return (
      <AuthContext.Consumer>
        {({ login }) => (
          <div className="login">{<Section login={login} />}</div>
        )}
      </AuthContext.Consumer>
    );
  }
}

LoginForm.propTypes = {
  navigateTo: PropTypes.func,
};
