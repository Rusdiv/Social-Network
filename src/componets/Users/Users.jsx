import React from 'react'
import UserPhoto from '../../accets/NAvatar.png'
import { Button } from '@material-ui/core'
import classes from './index.module.css'
import { NavLink } from 'react-router-dom'
import Paginator from './UsersPaginator'
import User from './User'


export default function Users(props) {
  let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );
  let pages = [];
  for (let i=1 ; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <Paginator  pages = {pages} selectedPage = {props.selectedPage} onPageChange = {props.onPageChange}/>

        <div className={classes.main}>
          {
            props.users.map(users => <User key = {users.id} users={users} unfollow={props.unfollow} follow={props.follow}/>)
          }
        </div>
      </div>

  )
}
