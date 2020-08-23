import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/redux-store'
import { Provider } from 'react-redux'

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
  const state = store.getState()
  rerenderEntireTree(state)
})

// Жопа , но я все понимаю это ))))




