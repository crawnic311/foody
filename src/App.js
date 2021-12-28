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
  const [recipeID, setRecipeID] = useState(0)
  const [newRecipe, setNewRecipe] = useState({
    id: 0,
    title: '',
    image: '',
    instructions: '',
  })

  const [recipes, setRecipes] = useState([
    {
      id: 0,
      title: 'Your first recipe will display here',
      image: 'Your first recipe will display here',
      instructions: 'Instructions for your first recipe will display here',
    },
  ])

  const setAndSaveRecipes = (newRecipes) => {
    setRecipes(newRecipes)
    localStorage.setItem('Recipe List', JSON.stringify(newRecipes))
    console.log(recipes)
  }

  const addRecipe = (recipe) => {
    const id = recipes.length ? recipes[recipes.length - 1].id + 1 : 1
    const myNewRecipe = {
      id,
      userId: recipe.userId,
      title: recipe.title,
      image: recipe.image,
      intructions: recipe.instructions,
    }
    setRecipeID(myNewRecipe.id)
    const listRecipes = [...recipes, myNewRecipe]
    setAndSaveRecipes(listRecipes)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newRecipe) return
    addRecipe(newRecipe)
    setNewRecipe({
      id: 0,
      userid: 0,
      title: '',
      image: '',
      instructions: '',
    })
  }

  const handleDelete = (id) => {
    const listRecipes = recipes.filter((recipe) => recipe.id !== id)
    console.log('listRecipes', listRecipes)
    setAndSaveRecipes(listRecipes)
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
            element={
              <Home
                recipeID={recipeID}
                setRecipeID={setRecipeID}
                recipes={recipes}
                setRecipes={setRecipes}
                handleDelete={handleDelete}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
