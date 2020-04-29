import React from "react";
import "../css/loginform.css";
import PropTypes from "prop-types";

export default function LoginForm(props) {
  console.log(props);

  return (
    <form className="login-form">
      <h1>Войти</h1>
      <div>Новый пользователь?</div>
      <a href="/" onClick={() => props.switchToDialog("registration")}>
        Зарегистрируйтесь
      </a>
      <label>
        <div>Имя пользователя*</div>
        <input type="text" />
      </label>
      <label>
        <div>Пароль*</div>
        <input type="password" />
      </label>
      <input
        type="submit"
        value="Войти"
        onClick={() => {
          props.login();
          props.navigateTo("main");
        }}
      />
    </form>
  );
}

LoginForm.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  switchToDialog: PropTypes.func.isRequired,
};
