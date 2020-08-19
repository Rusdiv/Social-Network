import React from 'react'
import './index.css'
import profile from './user.svg';
import message from './message.svg';
import news from './newspaper.svg'
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className='navigation'>
      <ul className='navigation-list'>
        <li className='navigation-list__item'>
          <NavLink to="/profile" className='navigation-list__link'>
            <img src={profile} className='navigation-list__profile nav-icon'/>
          </NavLink>
        </li>
        <li className='navigation-list__item'>
          <NavLink to="/messages" className='navigation-list__link'>
            <img src={message} className='navigation-list__message nav-icon'/>
          </NavLink>
        </li>
        <li className='navigation-list__item'>
          <NavLink to="#" className='navigation-list__link'>
            <img src={news} className='navigation-list__news nav-icon'/>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
