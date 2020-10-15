import React from 'react'
import classes from './index.module.css'
import Paginator from '../common/Paginator/Paginator'
import User from './User'


export default function Users(props) {
  let pagesCount = Math.ceil( props.totalUsersCount / props.pageSize );
  let pages = [];
  for (let i=1 ; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <Paginator pagesCount={pagesCount} selectedPage={props.selectedPage} onPageChanged={props.onPageChange}/>

        <div className={classes.main}>
          {
            props.users.map(users => <User key = {users.id} users={users} unfollow={props.unfollow} follow={props.follow}/>)
          }
        </div>
      </div>

  )
}
