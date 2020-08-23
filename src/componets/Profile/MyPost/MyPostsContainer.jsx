import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
    newPostTitle: state.profilePage.newPostTitle
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (text,title) => {
      dispatch(updateNewPostActionCreator(text,title));
    },

    addPost: (text,title) => {
      dispatch(addPostActionCreator(text,title));
      dispatch(updateNewPostActionCreator('',''))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;