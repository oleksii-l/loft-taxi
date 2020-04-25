import React, { Component } from "react";
import '../css/header.css';

export default class Header extends Component {
    render() {
        return <div className='header'>
            <div className='header__logo'>
                <img src='/img/point.png' className='header__pic'/>
                <img src='/img/lofttaxi.png' className='header__pic'/>
            </div>
            <div className='header__nav'>
                <button className='header__btn' onClick={() => this.props.setSection('map')}>Карта</button>
                <button className='header__btn' onClick={() => this.props.setSection('profile')}>Профиль</button>
                <button className='header__btn' onClick={() => this.props.navigateTo('login')}>Выйти</button>
            </div>
        </div>
    }

}