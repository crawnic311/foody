import React, { useState } from 'react'
import styles from './LoginForm.module.css'

const LoginForm = (props) => {
  const Login = props.Login
  const error = props.error

  const [details, setDetails] = useState({ name: '', email: '', password: '' })

  const submitHandler = (e) => {
    e.preventDefault()

    Login(details)
  }

  return (
    <div className={styles.LoginWrapper}>
      <form className={styles.LoginForm} onSubmit={submitHandler}>
        <div className={styles.ErrorWrapper}>
          {error !== '' ? <p className={styles.Error}>{error}</p> : ''}
        </div>
        <div className={styles.formgroup}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            id={styles.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className={styles.formgroup}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            id={styles.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className={styles.formgroup}>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id={styles.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
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
  )
}
export default LoginForm
