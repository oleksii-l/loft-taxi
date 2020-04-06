import React, {Component} from 'react';
import '../css/login.css';
import LoginForm from '../components/loginForm';

export default class Login extends Component {
    render() {
        console.log(this.props)
        return <div className='login'>
            <LoginForm navigateTo={this.props.navigateTo}/>
        </div>
    }
}