import React, { Component } from "react";
import "../css/login.css";
import LoginForm from "../components/loginForm";
import Registration from "../components/registration";
import PropTypes from "prop-types";
import { AuthContext } from "../js/AuthContext";

export default class  Login extends Component {
  static contextType = AuthContext;

  state = { currentPage: "login" };

  setSection = (section) => {
    this.setState({ currentPage: section });
  };

  SECTIONS = {
    login: (
      <LoginForm
        navigateTo={this.props.navigateTo}
        switchToDialog={this.setSection}
        login={this.context.login}
      />
    ),
    registration: (
      <Registration
        navigateTo={this.props.navigateTo}
        switchToDialog={this.setSection}
        login={this.context.login}
      />
    ),
  };

  render() {
    const Section = this.SECTIONS[this.state.currentPage];
    return <div data-testid='login' className="login">{Section}</div>;
  }
}

LoginForm.propTypes = {
  navigateTo: PropTypes.func,
  login: PropTypes.func,
};
