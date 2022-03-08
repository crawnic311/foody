import React, { useState } from 'react'
import { auth } from '../../firebase.config'
import styles from './loginform.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginForm = ({
  Login,
  error,
  user,
  setUser,
  logout,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
}) => {
  let navigate = useNavigate()

  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [displayLogin, setDisplayLogin] = useState(true)

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const submitHandlerRegister = (e) => {
    e.preventDefault()
    register()
  }
  const submitHandlerLogin = (e) => {
    e.preventDefault()
    login()
  }

  const register = async () => {
    if (registerPassword.length < 6) {
      return console.log('Insufficient Password Length')
    }
    try {
      axios
        .post(`http://localhost:3700/api/register`, {
          email: registerEmail,
          password: registerPassword,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    } catch (error) {
      console.log(error.message)
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
      navigate('/home')
    } catch (error) {
      console.log(error.message)
    }
  }

  const login = async () => {
    if (loginPassword.length < 6) {
      return console.log('Insufficient Password Length')
    }
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      console.log(user)
      console.log(user.user.email)
      setLoginEmail('')
      setLoginPassword('')
      axios
        .get(`http://localhost:3700/api/users`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
      navigate('/home')
    } catch (error) {
      console.log(error.message)
    }
  }

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
          <form className={styles.LoginForm} onSubmit={submitHandlerLogin}>
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
                autoComplete="on"
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
          <form className={styles.loginForm} onSubmit={submitHandlerRegister}>
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
                  autoComplete="on"
                  pattern=".{6,}"
                  title="Must contain at least 6 characters"
                  id={styles.password}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  value={registerPassword}
                />
                <span className={styles.ForgotPasswordRegister}></span>
              </div>
              <div className={styles.formgroup} id={styles.loginButton}>
                <input
                  type="submit"
                  value="CREATE"
                  id={styles.login}
                  onSubmit={submitHandlerRegister}
                ></input>
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
