const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'


let initialState = {
  postData:[
    {id: 1, text: 'Hi , I Like learn React , but it is so difficult' , name: 'React and me' , likesCount: '9999999'},
    {id: 2, text: 'blala' , name: 'balala' , likesCount: '1'},
  ],
  newPostTitle: '',
  newPostText: '',
}


export const profileReducer = (state = initialState , action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        name:  state.newPostTitle,
        text: state.newPostText,
        likesCount: 0,
      };
      return{...state,
        postData : [...state.postData, newPost],
        newPostText: ''
      };
    }   
    case UPDATE_NEW_POST: {
      return {...state,
        newPostText:action.newText,
        newPostTitle: action.title
      };
    }
    default:
      return state;
  }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text , title) => ({type:  UPDATE_NEW_POST, newText: text , title: title})