import React , { Component } from 'react'
import { connect } from 'react-redux'
import { getUserProfile, getStatus , updateStatus } from '../../Redux/profile-reducer'
import './index.css'
import Profile from './Profile'
import { withRouter, Redirect } from 'react-router-dom'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux'



class ProfileContainer extends Component{
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId)
  }

  render() {
    if (!this.props.isAuth ) return <Redirect to='/login'/>;
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps,{getUserProfile, getStatus , updateStatus}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);