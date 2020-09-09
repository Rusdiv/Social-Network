import Axios from "axios";
import { usersAPI } from "../API/API";



const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_USERS_COUNT = 'SET-USERS-COUNT'
const TOGGLE_IS_FETCH = 'TOGGLE-IS-FETCH';
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FETCH';

let initialState = {
  users: [],
  pageSize: 5,
  totalCount: 14,
  totalUsersCount: 0,
  selectedPage: 1,
  isFetching: true,
  isFollowing: false,
}

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(users => {
          if (users.id === action.userID) {
            return {
              ...users,
              followed: true
            }
          }
          return users;
        })
      }
      case UNFOLLOW:
        return {
          ...state,
          users: state.users.map(users => {
            if (users.id === action.userID) {
              return {
                ...users,
                followed: false
              }
            }
            return users;
          })
        }
        case SET_USERS:
          return {
            ...state, users: [...action.users]
          }
          case SET_PAGE:
            return {
              ...state, selectedPage: action.page
            }
            case SET_USERS_COUNT:
              return {
                ...state, totalUsersCount: action.usersCount
              }
              case TOGGLE_IS_FETCH:
                return {
                  ...state, isFetching: action.isFetching
                }
                case TOGGLE_IS_FOLLOWING:
                  return {
                    ...state, isFollowing: action.isFollowing
                  }
                  default:
                    return state;
  }
}

export const acceptFollow = (userID) => ({
  type: FOLLOW,
  userID
});
export const acceptUnfollow = (userID) => ({
  type: UNFOLLOW,
  userID
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users
});
export const setPage = (page) => ({
  type: SET_PAGE,
  page
});
export const setUsersCount = (usersCount) => ({
  type: SET_USERS_COUNT,
  usersCount
});
export const setFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCH,
  isFetching
});
export const setFollowing = (isFollowing) => ({
  type: TOGGLE_IS_FOLLOWING,
  isFollowing
});

export const getUsers = (selectedPage, totalCount) => {
  return (dispatch) => {
    dispatch(setFetching(true));
    Axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${selectedPage}&count=${totalCount}`, {
        withCredentials: true
      })
      .then(response => {
        dispatch(setFetching(false));
        dispatch(setUsers(response.data.items));
        dispatch(setUsersCount(response.data.totalCount));
      })
  }
}
export const follow = (userId) => {
  return (dispatch) => {
    usersAPI.follow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(acceptFollow(userId))
        }
      });
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    usersAPI.unfollow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(acceptUnfollow(userId))
        }
      });
  }
}