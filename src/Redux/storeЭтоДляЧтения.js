import { profileReducer } from './profile-reducer'
import { messagesReducer } from './messages-reducer'

let store = {
  _state: {

    messagesPage: {
      
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

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._callSubscber(this._state);
    
  }
}


export default store;
window.store = store;
