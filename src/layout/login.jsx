import React, { Component } from "react";
import "../css/login.css";
import LoginForm from "../components/loginForm";
import Registration from "../components/registration";

export default class Login extends Component {
  state = { currentPage: "login" };

  setSection = (section) => {
    this.setState({ currentPage: section });
  };

  SECTIONS = {
    login: <LoginForm navigateTo={this.props.navigateTo} switchToDialog={this.setSection} />,
    registration: <Registration navigateTo={this.props.navigateTo} switchToDialog={this.setSection} />,
  };

  render() {
    console.log(this.props);
    return <div className='login'>{this.SECTIONS[this.state.currentPage]}</div>;
  }
}
