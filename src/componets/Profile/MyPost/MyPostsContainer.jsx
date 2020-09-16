
import { addPostActionCreator } from '../../../Redux/profile-reducer';
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
    addPost: (title, text) => {
      dispatch(addPostActionCreator(title, text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;