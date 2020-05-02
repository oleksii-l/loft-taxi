import React, { Component } from "react";
import "../css/profile.css";
import { AuthContext } from "../js/AuthContext";

export default class Profile extends Component {
  static contextType = AuthContext;

  render() {
    if (this.context.isLoggedIn) {
      return <div className="profile">Профайл</div>;
    } else {
      return <div>you did not login</div>;
    }
  }
}
