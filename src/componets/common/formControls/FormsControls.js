import { styled } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import React from 'react'
import classes from './FormsControls.module.css'

const Field = styled(TextField)({
  width: '400px'
});

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
      <div className={classes.field}>
        <Field className={hasError && classes.error} {...props} {...input}/>
      </div>
      { hasError &&  <span className={classes.errorSpan} >{meta.error}</span>}
    </div>
    
  )
}