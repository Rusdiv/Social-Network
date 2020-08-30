import React from 'react';
import Navigation from './componets/Navigation/Navigation'
import ProfileContainer from './componets/Profile/ProfileContainer'
import MessagesContainer from './componets/Messages/MessagesContainer'
import './App.css'
import { Route, BrowserRouter } from 'react-router-dom';
import UsersContainer from './componets/Users/UsersContainer';
import News from './componets/News/News';
import HeaderContainer from './componets/header/HeaderContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navigation />
        <Route  path='/profile/:userId?' render={ () => 
          <ProfileContainer />}
        />
        <Route path='/messages' render={ () => 
          <MessagesContainer />}
        />
        <Route path='/users' render={ () => 
          <UsersContainer />}
        />
        <Route path='/news' render={ () => 
          <News />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;