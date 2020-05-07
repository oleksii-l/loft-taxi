import React from "react";

import Background from "../../img/bg/background.jpg";

import { makeStyles } from "@material-ui/core/styles";
import { Logo } from "loft-taxi-mui-theme";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
	wrapper: {
		backgroundColor: "#000",
		backgroundImage: `url(${Background})`,
		backgroundSize: "cover"
	},
	container: {
		maxWidth: "1000px",
		minHeight: "100vh",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	logo: {
		width: "420px",
		display: "flex",
		justifyContent: "center"
	}
}));

export const AuthPage = props => {
	const classes = useStyles();
	return (
		<div className={classes.wrapper}>
			<Container>
				<Box className={classes.container}>
					<Box className={classes.logo}>
						<Logo white animated />
					</Box>
					{props.children}
				</Box>
			</Container>
		</div>
	);
};
