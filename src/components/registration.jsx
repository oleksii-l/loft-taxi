import React from "react";
import "../css/registration.css";
import PropTypes from "prop-types";

export default function Registration(props) {
  console.log(props);

  return (
    <form className="login-form">
      <h1>Регистрация</h1>
      <div>Уже зарегистрированы?</div>
      <a href="#" onClick={() => props.switchToDialog("login")}>
        Войти
      </a>
      <label>
        <div>Адрес электронной почты*</div>
        <input type="text" />
      </label>
      <label>
        <div>Имя*</div>
        <input type="text" />
      </label>
      <label>
        <div>Фамилия*</div>
        <input type="text" />
      </label>
      <label>
        <div>Пароль*</div>
        <input type="password" />
      </label>
      <input
        type="submit"
        value="Войти"
        onClick={() => props.navigateTo("main")}
      />
    </form>
  );
}

Registration.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  switchToDialog: PropTypes.func.isRequired,
};
