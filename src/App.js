import React, { Suspense } from 'react';
import Navigation from './componets/Navigation/Navigation'
import ProfileContainer from './componets/Profile/ProfileContainer'
import MessagesContainer from './componets/Messages/MessagesContainer'
import './App.css'
import { Route, BrowserRouter } from 'react-router-dom';
import HeaderContainer from './componets/header/HeaderContainer';
import Login from './componets/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './componets/common/Preloader/Preloader';

const UsersContainer = React.lazy(() => import('./componets/Users/UsersContainer'));


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render(){
    if (!this.props.initialized) {
      return <Preloader />
    } 
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
          <Route path='/users' render={ () => {
            return (<Suspense fallback={<div>Loading...</div>}>
                        <UsersContainer />
                    </Suspense>)
          }
            }
          />
          <Route path='/login' render={ () => 
            <Login />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)
