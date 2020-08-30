import React, { Component } from 'react'
import Header from './Header'
import Axios from 'axios'
import { connect } from 'react-redux'
import { setUserData } from '../../Redux/auth-reducer'

class HeaderContainer extends Component {
  componentDidMount() {
    Axios .get('https://social-network.samuraijs.com/api/1.0/auth/me' , {
      withCredentials: true
    })
          .then(response => {
            if (response.data.resultCode === 0) {
              let {id , login , email} = response.data.data
              this.props.setUserData(id , email , login)
            }
          })
  }
  render() {
    return (
        <Header {...this.props}/>
    )
  }
}

const mapStateToPRops = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email
})


export default connect(mapStateToPRops, {setUserData})(HeaderContainer)
