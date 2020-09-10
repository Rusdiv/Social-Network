import React , { Component } from 'react'
import { connect } from 'react-redux'
import { getUserProfile } from '../../Redux/profile-reducer'
import './index.css'
import Profile from './Profile'
import { withRouter, Redirect } from 'react-router-dom'
import { usersAPI } from '../../API/API'


class ProfileContainer extends Component{
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    if (!this.props.isAuth ) return <Redirect to='/login'/>;
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{getUserProfile})(WithURLDataContainerComponent);