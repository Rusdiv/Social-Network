import Axios from 'axios'

export const getUsers =  (totalCount, number) => {
  return Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${totalCount}`,{
    withCredentials: true
  }
)}