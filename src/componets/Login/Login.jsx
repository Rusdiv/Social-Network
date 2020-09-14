import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { Field, reduxForm } from 'redux-form'


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
       <div>
          <Field label="Login" name='login' placeholder='Login' component={'input'}/>
       </div>
       <div>
          <Field label="Password" name='passowrd' placeholder='Password' component={'input'}/>
       </div>
       <div>
          <Field type='checkbox' name='rememberMe' component={'input'}/> remember me
      </div> 
      <button>Login</button>
    </form>
  )
}

const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm);

export default function Login(props) {
  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
  )
}

