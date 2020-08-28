import Users from './Users'
import { followAC, setUsersAC, unfollowAC, setPageAC , setUsersCountAC} from '../../Redux/users-reducer'
import { connect } from 'react-redux'



let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    selectedPage: state.usersPage.selectedPage,
    totalUsersCount: state.usersPage.totalUsersCount
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    unfollow: (userID) => {
      dispatch(unfollowAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setPage: (pageNumber) => {
      dispatch(setPageAC(pageNumber));
    },
    setTotalUsersCount: (count) => {
      dispatch(setUsersCountAC(count));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users);
