const {
  profileReducer,
  addPostActionCreator,
  deletePost
} = require("./profile-reducer");

it('after deleting length should be decrement' , () => {
  const action = deletePost(1)
  let state = {
    postData:[
      {id: 1, text: 'Hi , I Like learn React , but it is so difficult' , name: 'React and me' , likesCount: '9999999'},
      {id: 2, text: 'blala' , name: 'balala' , likesCount: '1'},
    ],
  }

  let newState = profileReducer(state, action);
  expect(newState.postData.length).toBe(1)
});

it('after deleting length should not decrement' , () => {
  const action = deletePost(10000)
  let state = {
    postData:[
      {id: 1, text: 'Hi , I Like learn React , but it is so difficult' , name: 'React and me' , likesCount: '9999999'},
      {id: 2, text: 'blala' , name: 'balala' , likesCount: '1'},
    ],
  }

  let newState = profileReducer(state, action);
  expect(newState.postData.length).toBe(2)
});