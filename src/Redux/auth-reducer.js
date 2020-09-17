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
        ...action.payload,
      }
    default:
      return state;
  }
}

export const getAuthUserData = () => (dispatch) => {
  authAPI.authMe().then(response => {
    if (response.data.resultCode === 0) {
     let {id , login , email} = response.data.data;
     dispatch(setUserData(id , email , login, true));
    }
  });
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData())
    }
  });
}

export const logout = () => (dispatch) => {
  authAPI.logout().then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserData(null , null , null, false));
    }
  });
}


export const setUserData = (id,email,login, isAuth) => ({type:SET_USER_DATA , payload: {id , email, login,isAuth}})