import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/redux-store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
     </Provider>
      <footer>
        тут футер
      </footer>
  </React.StrictMode>,
  document.getElementById('root')
);







