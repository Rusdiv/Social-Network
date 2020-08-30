import React from 'react'
import './index.css'
import logo from './logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className='login'>
        {props.isAuth ? <p className="login__name">{props.login}<br/><span>{props.email}</span></p> : <NavLink to='/login'>login</NavLink>}
      </div>
    </header>
  )
}
