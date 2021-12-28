import React, { useState, useEffect } from 'react'
import Home from './components/Home/Home'
import About from './components/About./About'
import Create from './components/Create/Create'
import Navbar from './components/Navbar/Navbar'
import LoginForm from './components/Login/loginform'
import PageNotFound from './components/404/PageNotFound'
import FruitBowl from './images/Breakfast-Fruit-Bowl-Recipe.jpeg'
import Cake from './images/Cake-Recipe.jpeg'
import Potato from './images/Potatoe-Chives-Recipe-Image.jpeg'
import Salmon from './images/Salmon-Stew-Recipe.png'

import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  const adminUser = {
    name: '',
    email: 'dillon.craw@gmail.com',
    password: '123',
  }
  const API_URL = 'https://localhost3500/recipes'
  const [user, setUser] = useState({ name: '', email: 'j', password: '' })
  const [error, setError] = useState('')
  const [newRecipe, setNewRecipe] = useState({
    id: 0,
    userid: 0,
    title: '',
    image: '',
    instructions: '',
  })

  const [recipes, setRecipes] = useState([
    {
      id: 1,
      userId: 5,
      title: 'Curry',
      image: FruitBowl,
      instructions: 'Mix everything well or suffer the consquences',
    },
    {
      id: 2,
      userId: 3,
      title: 'Fruit Bowl',
      image: Cake,
      instructions: 'Mix fruits with vigor',
    },
    {
      id: 3,
      userId: 7,
      title: 'Steak',
      image: Potato,
      instructions: 'Sear on both sides for 90 seconds on high heat',
    },
    {
      id: 4,
      userId: 3,
      title: 'Veggies',
      image: Salmon,
      instructions: 'Drizzle with olive oil and fry in a pan with a lid',
    },
  ])

  const addRecipe = () => {
    console.log('finish this funciton')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //new funciton
    console.log(newRecipe)
    //send recipeDetails to App to setNewRecipe if necessary
  }

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
      <div className="App">
        <Navbar Logout={Logout} />
        <Routes>
          <Route
            exact
            path="/"
            element={<LoginForm Login={Login} error={error} />}
          />
          <Route
            exact
            path="/create"
            element={
              <Create
                newRecipe={newRecipe}
                setNewRecipe={setNewRecipe}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route
            path="/home"
            element={<Home recipes={recipes} setRecipes={setRecipes} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
