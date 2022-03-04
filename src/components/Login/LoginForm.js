import React, { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase.config'
import styles from './loginform.module.css'

const LoginForm = ({Login, error, user, setUser, loggedIn, setLoggedIn}) => {


  const [details, setDetails] = useState({ name: '', email: '', password: '' })
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [displayLogin, setDisplayLogin] = useState(true)

  

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const submitHandler = (e) => {
    e.preventDefault()
    register()
    Login(details)
  }

  const register = async () => {
    if (registerPassword.length < 6) {
      return console.log('Insufficient Password Length')
    } 
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      console.log(user)
      setRegisterEmail('')
      setRegisterPassword('')
      setLoggedIn(true)
      console.log(loggedIn)
    } catch (error) {
      console.log(error.message)
    }
  }

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
        {displayLogin == true ? (
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
                value={loginEmail}
              />
            </div>
            <div className={styles.formgroup}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                id={styles.password}
                onChange={(e) => setLoginPassword(e.target.value)}
                value={loginPassword}
              />
              <span className={styles.ForgotPassword}>Forgot Password?</span>
            </div>
            <div className={styles.formgroup} id={styles.loginButton}>
              <input type="submit" value="LOGIN" id={styles.login} />
              <span href="" className={styles.NewHere}>
                New here?{' '}
                <a
                  className={styles.toRegister}
                  onClick={() => {
                    setDisplayLogin(false)
                  }}
                >
                  Create an account.
                </a>
              </span>
            </div>
          </form>
        ) : (
          <form className={styles.loginForm} onSubmit={submitHandler}>
          <div className={styles.LoginForm}>
            <div className={styles.ErrorWrapper}>
              {error !== '' ? <p className={styles.Error}>{error}</p> : ''}
            </div>
            <div className={styles.formgroup}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                id={styles.email}
                onChange={(e) => setRegisterEmail(e.target.value)}
                value={registerEmail}
              />
            </div>
            <div className={styles.formgroup}>
              <input
                type="password"
                placeholder="Password"
                name="password"
                pattern=".{6,}"
                title="Must contain at least 6 characters"
                id={styles.password}
                onChange={(e) => setRegisterPassword(e.target.value)}
                value={registerPassword}
              />
              <span className={styles.ForgotPasswordRegister}></span>
            </div>
            <div className={styles.formgroup} id={styles.loginButton}>
              <input type="submit" value="CREATE" id={styles.login} onSubmit={submitHandler}>
                
              </input>
              <span href="" className={styles.NewHere}>
                Already have an account?{' '}
                <a
                  className={styles.toRegister}
                  onClick={() => {
                    setDisplayLogin(true)
                  }}
                >
                  Login here.
                </a>
              </span>
            </div>
          </div>
          </form>
        )}
      </div>
    </div>
  )
}
export default LoginForm
