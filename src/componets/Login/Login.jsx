import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { requiredField } from '../../validators/validator';
import { Input } from '../common/formControls/FormsControls';


const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
       <div>
          <Field label="Login" name='login' validate={[requiredField]} placeholder='Login' component={Input}/>
       </div>
       <div>
          <Field label="Password" name='passowrd' validate={[requiredField]} placeholder='Password' component={Input}/>
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

