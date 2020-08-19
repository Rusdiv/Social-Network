import React from 'react';
import Header from './componets/header/Header'
import Navigation from './componets/Navigation/Navigation'
import Profile from './componets/Profile/Profile'
import Messages from './componets/Messages/Messages'
import './App.css'
import { Route, BrowserRouter } from 'react-router-dom';

function App(props) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <Route  path='/profile' render={ () => 
          <Profile  
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
          />}
        />
        <Route path='/messages' render={ () => 
          <Messages 
            messagesPage={props.state.messagesPage}
            addMessage={props.addMessage}
          />}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;