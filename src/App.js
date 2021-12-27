import React, { useState } from 'react'
import Home from './components/Home/Home'
import About from './components/About./About'
import Create from './components/Create/Create'
import Navbar from './components/Navbar/Navbar'
import LoginForm from './components/Login/LoginForm'
import PageNotFound from './components/404/PageNotFound'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const adminUser = {
    name: '',
    email: 'dillon.craw@gmail.com',
    password: '123',
  }

  const [user, setUser] = useState({ name: '', email: 'j', password: '' })
  const [error, setError] = useState('')

  const Login = (details) => {
    setUser({
      name: details.name,
      email: details.email,
      password: details.password,
    })
    console.log(details)

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log('Logged in')
    } else {
      console.log('Details do not match!')
      setError('Details do not match!')
    }
  }

  const Logout = () => {
    console.log('Logout')
    setUser({ email: '' })
  }
  return (
    <>
      {user.email !== '' ? (
        <div className="App">
          <Navbar Logout={Logout} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/about" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </>
  )
}

export default App
