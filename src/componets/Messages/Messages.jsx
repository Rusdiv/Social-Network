import React from 'react'
import classes from './Messages.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/DIalog'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

export default function Messages(props) {
  
  let dialogsElements = props.messagesPage.dialogData.map( (dialog) =>  <Dialog name={dialog.name} key={dialog.id}id={dialog.id}/>)
  let messagesElements = props.messagesPage.messagesData.map( (message) =>  <Message message={message.message} key={message.id} id={message.id} name={message.name}/>)
  

  const addNewMessage = (values) => {
    props.sendMessage(values.newMwssageBody)
  }

  if (!props.isAuth) return <Redirect to='/login'/>;

  return (
    <div className={classes.Messages__block}>
      <ul className={classes.Messages}>
        {messagesElements}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </ul>
      <ul className={classes.Dialog__list}> 
        {dialogsElements}
      </ul>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder='your message' component='textarea' name="newMwssageBody"/>
      <button className={classes.button}>Send</button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)

