import React from "react";

import RegistrationForm from "./RegistrationForm";
import { AuthPage } from "../common/AuthPage";

export const Registration = props => (
	<AuthPage>
		<div data-testid="registration">
			<RegistrationForm setPage={props.setPage} />
		</div>
	</AuthPage>
);
