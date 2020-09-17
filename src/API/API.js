import Axios from 'axios'

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
    console.warn('Error , please use profileAPI')
    return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instans.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instans.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instans.put(`profile/status`, {status})
  }
}

export const authAPI = {
  authMe() {
    return instans.get('auth/me')
  },
  login(email,password,rememberMe = false) {
    return (
      instans.post('auth/login', {email,password,rememberMe})
    )
  },
  logout(email,password,rememberMe = false) {
    return (
      instans.delete('auth/login')
    )
  }

}

