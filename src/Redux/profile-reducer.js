const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'


let initialState = {
  postData:[
    {id: 1, text: 'Hi , I Like learn React , but it is so difficult' , name: 'React and me' , likesCount: '999'},
    {id: 2, text: 'blala' , name: 'balala' , likesCount: '1'},
  ],
  newPostTitle: '',
  newPostText: '',
}


export const profileReducer = (state = initialState , action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        name:  action.title,
        text: action.postMessage,
        likesCount: 0,
      }
      state.postData.push(newPost);
      return {postData: state.postData}
    case UPDATE_NEW_POST:
      state.newPostText = action.newText;
      state.newPostTitle = action.title;
    default:
      return state;
  }
}
export const addPostActionCreator = (text , title) => ({type: ADD_POST, postMessage:text ,title: title})
export const updateNewPostActionCreator = (text , title) => ({type:  UPDATE_NEW_POST, newText: text , title: title})