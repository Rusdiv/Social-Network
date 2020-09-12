import React from 'react'
import classes from './Messages.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/DIalog'
import {TextField,Button} from '@material-ui/core'
import { Redirect } from 'react-router-dom'

export default function Messages(props) {
  
  let dialogsElements = props.messagesPage.dialogData.map( (dialog) =>  <Dialog name={dialog.name} key={dialog.id}id={dialog.id}/>)
  let messagesElements = props.messagesPage.messagesData.map( (message) =>  <Message message={message.message} key={message.id} id={message.id} name={message.name}/>)
  

  const onNewMessageChange = (e) => {
    const body = e.target.value;
    props.handleChange(body);
  }

  if (!props.isAuth) return <Redirect to='/login'/>;

  return (
    <div className={classes.Messages__block}>
      <ul className={classes.Messages}>
        {messagesElements}
        <li className={classes.send__block}>
          <TextField label='Your Message' onChange={onNewMessageChange} value={props.messagesPage.newMessageText}/>
          <Button  variant="contained" color='primary' onClick={props.sendMessage}>Send</Button>
        </li>
      </ul>
      <ul className={classes.Dialog__list}> 
        {dialogsElements}
      </ul>
    </div>
  )
}



