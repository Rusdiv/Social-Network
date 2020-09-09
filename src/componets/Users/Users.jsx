import React from 'react'
import UserPhoto from '../../accets/NAvatar.png'
import { Button } from '@material-ui/core'
import classes from './index.module.css'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../API/API'

export default function Users(props) {
  let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );
  let pages = [];
  for (let i=1 ; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
        {pages.map( number => {
          return <span key={number} className={props.selectedPage === number ? classes.selected : classes.span} 
          onClick={(e) => props.onPageChange(number)}>{number}</span>
        })}
        <div className={classes.main}>
          {
            props.users.map(users => 
            <div key={users.id} className={classes.block}>
                <NavLink to={'/profile/' + users.id}>
                  <img className={classes.avatar} alt="avatar"src={users.photos.small != null ? users.photos.small : UserPhoto}/>
                </NavLink>
                <h4 className={classes.name}>{users.name}</h4>
                <p className={classes.status}>{users.status != null ? users.status : 'Статуса нема'}</p>
                {users.followed 
                ? <Button color='primary' onClick={() => {
                    props.unfollow(users.id)
                }} variant="contained">unfollow</Button> 
                : <Button onClick={() => {
                  props.follow(users.id)
                  }} color='primary' variant="contained">follow</Button>}
            </div>)
          }
        </div>
      </div>

  )
}
