let store = {
  _state: {
    profilePage: {
      postData:[
        {id: 1, text: 'Hi , I Like learn React , but it is so difficult' , name: 'React and me' , likesCount: '999'},
        {id: 2, text: 'blala' , name: 'balala' , likesCount: '1'},
      ],
      newPostTitle: '',
      newPostText: '',
    },
  
    messagesPage: {
      dialogData:[
        {id: 1, name: 'Aleksandr'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Boris'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Ruslan'},
        {id: 6, name: 'Sasha'},
      ],
    
      messagesData:[
        {id: 1, message: 'Hi' ,name: 'Aleksandr'},
        {id: 2, message: 'Yo', name: 'Aleksandr'},
        {id: 3, message: 'yo', name: 'Dima'},
        {id: 4, message: 'What`s is u name?', name: 'Aleksandr'},
        {id: 5, message: 'My name is Dima', name: 'Dima'},
        {id: 6, message: 'OMG', name: 'Aleksandr'},
      ]
    },
  
    newsPage: {
  
    },
  },
  getState(){
    return this._state;
  },
  _callSubscber() {
    console.log('state changed');
  },

  subscribe(observer) {
    this._callSubscber = observer
  },
  dispatch(action) {

    if(action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        text: action.postMessage,
        likesCount: 0,
        name:  action.title
      }
      this._state.profilePage.postData.push(newPost);
      this._callSubscber(this._state);

    } else if (action.type === 'UPDATE-NEW-POST') {

      this._state.profilePage.newPostText = action.newText;
      this._state.profilePage.newPostTitle = action.title;
      this._callSubscber(this._state);

    } else if (action.type === 'ADD-MESSAGE') { 
        let newMessage = {
          id: 7, 
          message: 'Hi', 
          name: 'Dima'
        }
        this._state.messagesPage.messagesData.push(newMessage);
        this._callSubscber(this._state);
    }
  }
  
}

export default store;
window.store = store;
