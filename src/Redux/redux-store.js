import { createStore, combineReducers } from 'redux';

import { profileReducer } from './profile-reducer'
import { messagesReducer } from './messages-reducer'
import { usersReducer } from './users-reducer';

let redusers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer
})

let store = createStore(redusers);
window.store = store.getState()
export default store;