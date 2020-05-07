import { makeStyles } from "@material-ui/core/styles";

export const useFormStyles = makeStyles(theme => ({
	form: {
		padding: "60px 0",
		width: "500px"
	},
	container: {
		padding: "0 60px 0 50px"
	},
	button: {
		display: "flex",
		justifyContent: "flex-end",
		marginTop: "30px"
	}
}));
