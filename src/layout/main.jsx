import React, { Component } from "react";
import "../css/main.css";
import {Header} from "../components/header";
import Map from "../components/map";
import Profile from "../components/profile";
import PropTypes from 'prop-types';

const SECTIONS = {
  map: Map,
  profile: Profile,
};

export default class Main extends Component {
  state = { currentPage: "map" };

  setSection = (section) => {
    this.setState({ currentPage: section });
  }

  render() {
    const Section = SECTIONS[this.state.currentPage];
    return (
      <>
        <Header navigateTo={this.props.navigateTo} setSection={this.setSection} />
        <Section />
      </>
    );
  }
}

Main.propTypes = {
  navigateTo: PropTypes.func
}
