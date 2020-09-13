import React from 'react'
import './index.css'
import MyPostsContainer from './MyPost/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'


export default function Profile(props) {


  return (
    <div className='Profile'>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  )
}
