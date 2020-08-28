import React, { Component } from 'react'
import classes from './index.module.css'
import { Button } from '@material-ui/core'
import Axios from 'axios'
import UserPhoto from '../../accets/NAvatar.png'

export default class Users extends Component {
  componentDidMount() {
    Axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.totalCount}`)
    .then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    })
  }
  
  onPageChange = (number) => {
    this.props.setPage(number);
    Axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.totalCount}`)
      .then(response => {
      this.props.setUsers(response.data.items);
    })
  }

  render() {
    let pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize );
    let pages = [];
    for (let i=1 ; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        {pages.map( number => {
          return <span className={this.props.selectedPage === number && classes.selected} 
          onClick={(e) => this.onPageChange(number)}>{number}</span>
        })}
        <div className={classes.main}>
          {
            this.props.users.map(users => 
            <div key={users.id} className={classes.block}>
                <img className={classes.avatar} src={users.photos.small != null ? users.photos.small : UserPhoto}/>
                <h4 className={classes.name}>{users.name}</h4>
                <p className={classes.status}>{users.status != null ? users.status : 'Статуса нема'}</p>
                {users.followed 
                ? <Button color='primary' onClick={() => {this.props.unfollow(users.id)}} variant="contained">unfollow</Button> 
                : <Button onClick={() => {this.props.follow(users.id)}} color='primary' variant="contained">follow</Button>}
            </div>)
          }
        </div>
      </div>
    )
  }
}
