import React, { Component } from 'react'
import * as Axios from 'axios'
import Users from './Users'
import { follow, setUsers, unfollow, setPage , setUsersCount , setFetching , setFollowing} from '../../Redux/users-reducer'
import { connect } from 'react-redux'
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../../API/API'

class UsersAPIComponent extends Component {
  componentDidMount() {
    this.props.setFetching(true);
    Axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.totalCount}` ,{
      withCredentials: true
    })
    .then(response => {
      this.props.setFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setUsersCount(response.data.totalCount);
    })
  }
  
  onPageChange = (number) => {
    this.props.setFetching(true);
    this.props.setPage(number);
    usersAPI.getUsers(this.props.totalCount , number)
      .then(data => {
      this.props.setFetching(false);
      this.props.setUsers(data.items);
    })
  }

  render() {
    return (
    <>
    {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize}
        onPageChange={this.onPageChange}
        selectedPage={this.props.selectedPage}
        users = {this.props.users}
        follow = {this.props.follow}
        unfollow = {this.props.unfollow}
        setFollowing = {this.props.setFollowing}
      /> </>)
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    selectedPage: state.usersPage.selectedPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing,
  }
}


export default connect(mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    setPage,
    setUsersCount,
    setFetching,
    setFollowing,
  }
  )(UsersAPIComponent);
