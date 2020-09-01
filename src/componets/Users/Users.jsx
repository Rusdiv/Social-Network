import React from 'react'
import UserPhoto from '../../accets/NAvatar.png'
import { Button } from '@material-ui/core'
import classes from './index.module.css'
import { NavLink } from 'react-router-dom'
import Axios from 'axios'

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
                ? <Button color='primary' onClick={() => {props.unfollow(users.id);
                 Axios
                  .delete(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {withCredentials: true ,
                    headers : {
                      'API-KEY': '3ed9e494-5b67-4e76-b3c5-d773fe85c092'
                    }
                  })
                  .then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(users.id)
                    }
                  })
                }} variant="contained">unfollow</Button> 
                : <Button onClick={() => {
                   Axios
                    .post(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, null , {withCredentials: true ,
                      headers : {
                        'API-KEY': '3ed9e494-5b67-4e76-b3c5-d773fe85c092'
                      }
                    })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(users.id)
                      }
                  })
                  }} color='primary' variant="contained">follow</Button>}
            </div>)
          }
        </div>
      </div>

  )
}
