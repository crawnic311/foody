import React, { useState, useEffect } from 'react'
import Home from './components/Home/Home'
import About from './components/About./About'
import Create from './components/Create/Create'
import Navbar from './components/Navbar/Navbar'
import LoginForm from './components/Login/LoginForm'
import PageNotFound from './components/404/PageNotFound'
import api from './api/post'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const adminUser = {
    name: '',
    email: 'dillon.craw@gmail.com',
    password: '123',
  }

  const [user, setUser] = useState({ name: '', email: 'j', password: '' })
  const [recipe, setRecipe] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await api.get('/recipes')
        setRecipe(response.data)
      } catch (err) {
        if (error.response) {
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }

    fetchRecipe()
  }, [])

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
