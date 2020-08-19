import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './index.module.css'

const Dialog = (props) => {
  const {name , id} = props;
  return (
    <li>
      <NavLink to={'/messages/' + id} className={classes.Dialog__item}>
        {name}
      </NavLink>
    </li>
  )
}

export default  Dialog;