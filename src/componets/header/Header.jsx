import React from 'react'
import './index.css'
import logo from './logo.svg';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </header>
  )
}
