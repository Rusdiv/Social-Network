import React from 'react';
import Header from './componets/header/Header'
import Navigation from './componets/Navigation/Navigation'
import Profile from './componets/Profile/Profile'
import MessagesContainer from './componets/Messages/MessagesContainer'
import './App.css'
import { Route, BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <Route  path='/profile' render={ () => 
          <Profile />}
        />
        <Route path='/messages' render={ () => 
          <MessagesContainer />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;