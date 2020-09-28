import { createSelector } from "reselect"

export const getUsersCount = (state) => {
  return state.usersPage.users
}

export const getUsersCountSuper = createSelector(getUsersCount , (users) => {
  return users
} );

export const getPageSize = (state) => {
  return state.usersPage.pageSize
}

export const getTotalCount = (state) => {
  return state.usersPage.totalCount
}

export const getSelectedPage = (state) => {
  return state.usersPage.selectedPage
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}

export const getIsFollowing = (state) => {
  return state.usersPage.isFollowing
}

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount
}

