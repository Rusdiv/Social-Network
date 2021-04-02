import {
  profileAPI,
  usersAPI
} from "../API/API";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE_POST'

let initialState = {
  profile: null,
  postData: [{
      id: 1,
      text: 'Hi , I Like learn React , but it is so difficult',
      name: 'React and me',
      likesCount: '9999999'
    },
    {
      id: 2,
      text: 'blala',
      name: 'balala',
      likesCount: '1'
    },
  ],
  newPostTitle: '',
  newPostText: '',
  status: null,
}


export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        name: action.newPostTitle,
        text: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case DELETE_POST:
      return {
        ...state,
        postData: state.postData.filter(p => p.id !== action.postId)
      }
      default:
        return state;
  }
}
export const addPostActionCreator = (title, text) => ({
  type: ADD_POST,
  newPostTitle: title,
  newPostText: text
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId
});

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId)
  dispatch(setUserProfile(response.data));
};
