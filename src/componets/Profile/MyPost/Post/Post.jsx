import React from 'react'
import classes from './Post.module.css'


export default function Post(props) {
  const { text , name , likesCount } = props;
  return (
    <li className={classes.item}>
      <div>
        <h4 className={classes.name}>{name}</h4>
        <p className={classes.text}>{text}</p>
        <button className={classes.like}></button> {likesCount}
      </div>
    </li>
  )
}
