import React, { useState } from 'react'
//import foody from '../../../public/foodylogo.png'
import styles from './loginform.module.css'

const LoginForm = (props) => {
  const Login = props.Login
  const error = props.error

  const [details, setDetails] = useState({ name: '', email: '', password: '' })
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    Login(details)
  }

  const register = async () => {}

  const login = async () => {}

  const logout = async () => {}

  return (
    <div className={styles.LoginMaster}>
      <img
        src="/foodylogo.png"
        alt="logo"
        width="300"
        height="138"
        className={styles.foodylogo}
      />
      <div className={styles.LoginWrapper}>
        <form className={styles.LoginForm} onSubmit={submitHandler}>
          <div className={styles.ErrorWrapper}>
            {error !== '' ? <p className={styles.Error}>{error}</p> : ''}
          </div>
          <div className={styles.formgroup}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              id={styles.email}
              onChange={(e) => setLoginEmail(e.target.value)}
              value={details.email}
            />
          </div>
          <div className={styles.formgroup}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id={styles.password}
              onChange={(e) => setLoginPassword(e.target.value)}
              value={details.password}
            />
            <span className={styles.ForgotPassword}>Forgot Password?</span>
          </div>
          <div className={styles.formgroup} id={styles.loginButton}>
            <input type="submit" value="LOGIN" id={styles.login} />
            <span href="" className={styles.NewHere}>
              New here? Create an account.
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
export default LoginForm
