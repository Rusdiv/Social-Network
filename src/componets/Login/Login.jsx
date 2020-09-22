import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { requiredField } from '../../validators/validator';
import { Input } from '../common/formControls/FormsControls';
import { login } from '../../Redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import styles from './index.module.css'
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    width: '400px',
    background: 'linear-gradient(45deg, #4d2fb9 30%, #40e4fa 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

const LoginForm = (props) => {
  const classes = useStyles();
  return (
    <form onSubmit={props.handleSubmit} className={styles.form}>
    <div></div>
       <div className={styles.div}>
          <Field className={styles.input} label="email" name='email' type='email' validate={[requiredField]}  component={Input}/>
       </div>
       <div className={styles.div}>
          <Field className={styles.input} label="Password" name='password' type='password' validate={[requiredField]} component={Input}/>
       </div>
       <div className={styles.div}>
          <Field className={styles.box}  type='checkbox' name='rememberMe' component={'input'}/> remember me
      </div>
      {props.error && <div className={styles.allError}>{props.error}</div>}
      <button className={classes.root}>Login</button>
    </form>
  )
}

const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm);

function Login(props) {
  const onSubmit = (formData) => {
    props.login(formData.email , formData.password , formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to='profile' />
  }

  return (
    <div>
      <h1 className={styles.h1}>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {
  login
})(Login)