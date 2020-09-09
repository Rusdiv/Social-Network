import Axios from 'axios'

const instans = Axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers : {
    'API-KEY': '3ed9e494-5b67-4e76-b3c5-d773fe85c092'
  }
});

export const usersAPI = {
  getUsers(totalCount, number) {
    return instans.get(`users?page=${number}&count=${totalCount}`)
    .then(response => response.data )
  }
}

