import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {Button} from "@material-ui/core"


export default function MyPosts(props) {

  let newPostTitle = React.createRef();
  let newPostTextarea = React.createRef();


  const addPost = () => {
    let title = newPostTitle.current.value;
    let text = newPostTextarea.current.value;

    props.dispatch({ type: 'ADD-POST', postMessage: text , title: title });
    props.dispatch({type: 'UPDATE-NEW-POST', newText: '' , title: ''})

  }

  const handleChange = () => {
    let title = newPostTitle.current.value;
    let text = newPostTextarea.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST', newText: text , title: title});

  }
  return (
    <div>
      <h2 className={classes.title}>My Posts</h2>
      <div className={classes.block}>
        <input type='text'  ref={newPostTitle} className={classes.inputTitle} onChange={handleChange} value={props.newPostTitle} placeholder='Title'/>
        <textarea className={classes.input} ref={newPostTextarea} placeholder='Text' onChange={handleChange} value={props.newPostText} />
        <div className={classes.buttonBlock}>
          <Button color='primary' onClick={addPost}>New Post</Button>
        </div>
      </div>
      <ul>
        {props.postData.map( (post) => <Post name={post.name} text={post.text} likesCount={post.likesCount}/>)}
      </ul>
    </div>
  )
}
