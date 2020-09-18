import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form';
import {requiredField , maxLengthCreator} from '../../../validators/validator'
import { Textarea, Title } from '../../common/formControls/FormsControls';


export default function MyPosts(props) {

  const onAddPost = (values) => {
    props.addPost(values.postTitle, values.postBody)
  }

  return (
    <div>
      <h2 className={classes.title}>My Posts</h2>
      <AddPostFormRedux onSubmit={onAddPost}/>
      <ul>
        {props.postData.map( (post) => <Post name={post.name} key={post.id} text={post.text} likesCount={post.likesCount}/>)}
      </ul>
    </div>
  )
}
const length = maxLengthCreator(300)

const AddPostForm = (props) => {
  return (
    <form className={classes.block} onSubmit={props.handleSubmit}>
      <div className={classes.inputTitle}>
        <Field type='text' validate={[requiredField, length]} component={Title} name='postTitle'   label='Title'/>
      </div>
      
      <Field type='text' validate={[requiredField, length]} component={Textarea} name='postBody' className={classes.input}  label='Text'/>
      <div className={classes.buttonBlock}>
        <button color='primary' className={classes.button}>New Post</button>
      </div>
    </form>
  )

}

const AddPostFormRedux = reduxForm({form:'addPostForm'})(AddPostForm)