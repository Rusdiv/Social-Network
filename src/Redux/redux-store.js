import { createStore, combineReducers, applyMiddleware } from 'redux';

import { profileReducer } from './profile-reducer'
import { messagesReducer } from './messages-reducer'
import { usersReducer } from './users-reducer';
import photoReducer from "./photo-reducer";
import searchReducer from "./search-reducer";
import { authReducer } from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


let redusers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  photoStore: photoReducer,
  searchStore: searchReducer,
  auth: authReducer,
  form: formReducer,
})

let store = createStore(redusers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;