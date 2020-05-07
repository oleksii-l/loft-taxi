import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Map } from "../components/map";
import { Login } from "../components/login";
import { Registration } from "../components/registration";
import { Profile } from "../components/profile";

import { getIsLoggedIn } from "../modules/auth";

const mainPage = props => {
	const { isLoggedIn } = props;
	const loginPath = "/login";
	const PrivateRoute = ({ component: RouteComponent }) => (
		<Route
			render={routeProps =>
				isLoggedIn ? (
					<RouteComponent {...routeProps} />
				) : (
					<Redirect to={loginPath} />
				)
			}
		/>
	);

	return (
		<Switch>
			<Route path="/login" component={Login} />
			<Route path="/registration" component={Registration} />
			<PrivateRoute path="/map" component={Map} />
			<PrivateRoute path="/profile" component={Profile} />
			<Redirect to="/map" />
		</Switch>
	);
};

const mapStateToProps = state => ({
	isLoggedIn: getIsLoggedIn(state)
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(mainPage);
