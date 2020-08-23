import { createStore, combineReducers } from 'redux';

import { profileReducer } from './profile-reducer'
import { messagesReducer } from './messages-reducer'

let redusers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer
})

let store = createStore(redusers);
window.store = store.getState()
export default store;