import React, { Component } from 'react'
import Users from './Users'
import { follow, unfollow, setPage , setUsersCount ,  setFollowing , getUsers} from '../../Redux/users-reducer'
import { connect } from 'react-redux'
import Preloader from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

class UsersAPIComponent extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.selectedPage , this.props.totalCount)
  }
  
  onPageChange = (number) => {
    this.props.getUsers(number , this.props.totalCount)
     this.props.setPage(number);
 
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

let RedirectComponent = withAuthRedirect(UsersAPIComponent);

export default connect(mapStateToProps,
  {
    follow,
    unfollow,
    setPage,
    setUsersCount,
    setFollowing,
    getUsers,
  }
  )(RedirectComponent);
