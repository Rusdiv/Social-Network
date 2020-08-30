import React , { Component } from 'react'
import { connect } from 'react-redux'
import { setUserProfile } from '../../Redux/profile-reducer'
import './index.css'
import Profile from './Profile'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'


class ProfileContainer extends Component{
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        console.log(response);
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = state => ({
  profile: state.profilePage.profile
})

let WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile})(WithURLDataContainerComponent);