import React, { Component } from "react";
import '../css/loginform.css';

export default class LoginForm extends Component {
  render() {
    return <form className='login-form'>
        <h1>Войти</h1>
        <div>Новый пользователь?</div>
        <a href='#'>Зарегистрируйтесь</a>
        <label>
            <div>Имя пользователя*</div>
            <input type='text'/>
        </label>
        <label>
            <div>Пароль*</div>
            <input type='password'/>
        </label>
        <input type="submit" value='Войти' onClick={() => this.props.navigateTo('main')}/>
    </form>;
  }
}
