import React from 'react'
import UserPhoto from '../../accets/NAvatar.png'
import { Button } from '@material-ui/core'
import classes from './index.module.css'
import { NavLink } from 'react-router-dom'



export default function User(props) {
  let users = props.users
  return (

            <div className={classes.block}>
                <NavLink to={'/profile/' + users.id}>
                  <img className={classes.avatar} alt="avatar" src={users.photos.small != null ? users.photos.small : UserPhoto}/>
                </NavLink>
                <h4 className={classes.name}>{users.name}</h4>
                <p className={classes.status}>{users.status != null ? users.status : 'Status'}</p>
                {users.followed 
                ? <Button color='primary' onClick={() => {
                    props.unfollow(users.id)
                }} variant="contained">unfollow</Button> 
                : <Button onClick={() => {
                    props.follow(users.id)
                  }} color='primary' variant="contained">follow</Button>}
            </div>

  )
}
