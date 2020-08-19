import React from 'react'
import classes from './index.module.css'

const Message = (props) => {
  const { message, name , id } = props;

  return (
    <li className={classes.Messages__item}> messageID={id} {name} : {message}</li>
  )
}

export default  Message;
