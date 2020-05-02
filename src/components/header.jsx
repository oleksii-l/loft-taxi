import React, { useContext } from "react";
import "../css/header.css";
import PropTypes from "prop-types";
import { Link as RouterLink, withRouter } from "react-router-dom";

import { AuthContext } from "../js/AuthContext";

import { Logo } from "loft-taxi-mui-theme";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: "#fff",
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = withRouter(props => {
  const classes = useStyles();
  const context = useContext(AuthContext);

  return (
    <AppBar position="static" className={classes.bar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Logo />
        </Typography>
        <Button onClick={() => props.setSection("map")} color="inherit">
          Карта
        </Button>
        <Button onClick={() => props.setSection("profile")} color="inherit">
          Профиль
        </Button>
        <Button
          onClick={() => {
            context.logout();
            props.navigateTo("login");
          }}
          color="inherit"
        >
          Выйти
        </Button>
      </Toolbar>
    </AppBar>
  );
});

Header.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  setSection: PropTypes.func.isRequired,
};
