import React from 'react'
import classes from './Messages.module.css'
import Message from './Message/Message'
import Dialog from './Dialog/DIalog'
import {TextField,Button} from '@material-ui/core'

export default function Messages(props) {

  let dialogsElements = props.messagesPage.dialogData.map( (dialog) =>  <Dialog name={dialog.name} id={dialog.id}/>)
  let messagesElements = props.messagesPage.messagesData.map( (message) =>  <Message message={message.message} id={message.id} name={message.name}/>)

  return (
    <div className={classes.Messages__block}>
      <ul className={classes.Messages}>
        {messagesElements}
        <li className={classes.send__block}>
          <TextField  label='Your Message'/>
          <Button  variant="contained" color='primary' onClick={props.addMessage}>Send</Button>
        </li>
      </ul>
      <ul className={classes.Dialog__list}> 
        {dialogsElements}
      </ul>
    </div>
  )
}



