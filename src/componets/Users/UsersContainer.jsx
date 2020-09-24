import React, { Component } from 'react'
import Users from './Users'
import { follow, unfollow, setPage , setUsersCount ,  setFollowing , getUsers} from '../../Redux/users-reducer'
import { connect } from 'react-redux'
import Preloader from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { getPageSize, getUsersCountSuper , getTotalCount , getIsFollowing , getSelectedPage , getIsFetching , getTotalUsersCount} from '../../Redux/users-selectors'

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


// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalCount: state.usersPage.totalCount,
//     selectedPage: state.usersPage.selectedPage,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     isFetching: state.usersPage.isFetching,
//     isFollowing: state.usersPage.isFollowing,
//   }
// }


let mapStateToProps = (state) => {
  return {
    users: getUsersCountSuper(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    selectedPage: getSelectedPage(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    isFollowing: getIsFollowing(state),
  }
}

export default compose(
  connect(mapStateToProps,
    {
      follow,unfollow,setPage,
      setUsersCount,setFollowing,getUsers,
    }),
  withAuthRedirect
)(UsersAPIComponent)
