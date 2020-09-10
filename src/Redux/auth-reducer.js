import { authAPI } from "../API/API";

const SET_USER_DATA = 'SET-USER-DATA';



let initialState = {
  "id": null,
  "login": null,
  "email": null,
  isAuth: false,

}

export const authReducer = (state = initialState , action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }
    default:
      return state;
  }
}

export const getAuthUserData = () => (dispatch) => {
  authAPI.authMe().then(response => {
    if (response.data.resultCode === 0) {
     let {id , login , email} = response.data.data;
     dispatch(setUserData(id , email , login));
    }
  });
}
export const setUserData = (id,email,login) => ({type:SET_USER_DATA , data: {id , email, login}})