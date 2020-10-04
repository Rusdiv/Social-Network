import { createStore, combineReducers, applyMiddleware , compose } from 'redux';

import { profileReducer } from './profile-reducer'
import { messagesReducer } from './messages-reducer'
import { usersReducer } from './users-reducer';
import { authReducer } from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import { appReducer } from './app-reducer';


let redusers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

window.store = store;
export default store;