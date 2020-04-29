import React, { Component } from "react";
import "../css/header.css";
import PropTypes from "prop-types";
import { AuthContext } from "../js/AuthContext";

export default class Header extends Component {
  static contextType = AuthContext;

  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <img src="/img/point.png" alt="" className="header__pic" />
          <img src="/img/lofttaxi.png" alt="" className="header__pic" />
        </div>
        <div className="header__nav">
          <button
            className="header__btn"
            onClick={() => this.props.setSection("map")}
          >
            Карта
          </button>
          <button
            className="header__btn"
            onClick={() => this.props.setSection("profile")}
          >
            Профиль
          </button>
          <button
            className="header__btn"
            onClick={() => {
              this.context.logout();
              this.props.navigateTo("login");
            }}
          >
            Выйти
          </button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  setSection: PropTypes.func.isRequired,
};
