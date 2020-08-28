const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_USERS_COUNT = 'SET-USERS-COUNT'


let initialState = {
  users: [ ],
  pageSize: 5,
  totalCount: 14,
  totalUsersCount: 0,
  selectedPage: 1
}

export const usersReducer = (state = initialState , action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state ,
        users: state.users.map(users => {
          if (users.id === action.userID) {
            return {...users, followed: true }
          }
          return users;
        })
      }
    case UNFOLLOW:
      return {
        ...state ,
        users: state.users.map(users => {
          if (users.id === action.userID) {
            return {...users, followed: false }
          }
          return users;
        })
      }
    case SET_USERS: 
      return {...state, users: [...action.users]}
    case SET_PAGE: 
      return {...state, selectedPage: action.page}
    case SET_USERS_COUNT: 
      return {...state,   totalUsersCount: action.usersCount}

    default:
      return state;
  }
}

export const followAC = (userID) => ({type: FOLLOW , userID});
export const unfollowAC = (userID) =>  ({type:  UNFOLLOW, userID});
export const setUsersAC = (users) =>  ({type:  SET_USERS, users});
export const setPageAC = (page) => ({type:SET_PAGE , page})
export const setUsersCountAC = (usersCount) => ({type:SET_USERS_COUNT , usersCount})