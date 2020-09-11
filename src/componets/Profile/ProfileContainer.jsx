import React , { Component } from 'react'
import { connect } from 'react-redux'
import { getUserProfile } from '../../Redux/profile-reducer'
import './index.css'
import Profile from './Profile'
import { withRouter, Redirect } from 'react-router-dom'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'



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

let RedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = state => ({
  profile: state.profilePage.profile,
});



let WithURLDataContainerComponent = withRouter(RedirectComponent)

export default connect(mapStateToProps,{getUserProfile})(WithURLDataContainerComponent);