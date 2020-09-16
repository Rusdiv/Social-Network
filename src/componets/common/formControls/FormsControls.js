import { FormControl } from '@material-ui/core';
import React from 'react'
import classes from './FormsControls.module.css'


export const Textarea = ({input, meta , ...props}) => {

  const hasError = meta.touched && meta.error ;

  return (
    <div>
      <div>
        <textarea className={hasError && classes.error} {...props} {...input}/>
      </div>
      { hasError &&  <span className={classes.errorSpan} >{meta.error}</span>}
    </div>
    
  )
}

export const Input = ({input, meta , ...props}) => {
  const hasError = meta.touched && meta.error ;

  return (
    <div>
      <div>
        <input className={hasError && classes.error} {...props} {...input}/>
      </div>
      { hasError &&  <span className={classes.errorSpan} >{meta.error}</span>}
    </div>
    
  )
}