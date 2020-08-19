import React from 'react'
import './index.css'
import MyPosts from './MyPost/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


export default function Content(props) {
  return (
    <div className='Profile'>
      <ProfileInfo />
      <MyPosts 
        dispatch={props.dispatch} 
        postData={props.profilePage.postData} 
        newPostTitle={props.profilePage.newPostTitle}
        newPostText={props.profilePage.newPostText}/>
    </div>
  )
}
