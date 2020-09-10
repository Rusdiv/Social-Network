import Axios from 'axios'
import { follow } from '../Redux/users-reducer';

const instans = Axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers : {
    'API-KEY': '16bd7f9c-c5c8-453b-9ba0-977e6ec81d98'
  }
});

export const usersAPI = {
  getUsers(totalCount, number) {
    return instans.get(`users?page=${number}&count=${totalCount}`)
    .then(response => response.data )
  },
  unfollow(userId) {
    return instans.delete(`follow/${userId}`)
  },
  follow(userId) {
    return instans.post(`follow/${userId}`)
  },
  getProfile(userId) {
    return instans.get(`profile/${userId}`)
  }
}

export const authAPI = {
  authMe() {
    return instans.get('auth/me')
  }
}

