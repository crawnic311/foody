import React, { useState, useEffect } from 'react'
import Home from './components/Home/Home'
import About from './components/About./About'
import Create from './components/Create/Create'
import Navbar from './components/Navbar/Navbar'
import LoginForm from './components/Login/loginform'
import PageNotFound from './components/404/PageNotFound'
import SearchRecipe from './components/Search/SearchRecipe'
import FruitBowl from './images/Breakfast-Fruit-Bowl-Recipe.jpeg'
import Cake from './images/Cake-Recipe.jpeg'
import Potato from './images/Potatoe-Chives-Recipe-Image.jpeg'
import Salmon from './images/Salmon-Stew-Recipe.png'
import { Routes, Route } from 'react-router-dom'
import apiRequest from './api/apiRequest'
import './App.css'

function App() {
  const adminUser = {
    name: '',
    email: 'dillon.craw@gmail.com',
    password: '123',
  }
  const API_URL = 'http://localhost:3500/recipes'

  const [user, setUser] = useState({ name: '', email: 'j', password: '' })
  const [error, setError] = useState('')
  const [fetchError, setFetchError] = useState('')
  const [search, setSearch] = useState('')
  const [recipeID, setRecipeID] = useState(0)
  const [newRecipe, setNewRecipe] = useState({
    id: null,
    title: '',
    image: '',
    instructions: '',
  })

  const [recipes, setRecipes] = useState([
    {
      title: 'Your first recipe will display here',
      image: 'Your first recipe will display here',
      instructions: 'Instructions for your first recipe will display here',
    },
  ])

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error('Did not recieve expected data')
        const listRecipes = await response.json()
        console.log(listRecipes)
        setRecipes(listRecipes)
        setRecipeID(1)
        setFetchError(null)
      } catch (err) {
        setFetchError(error.message)
      }
    }
    setTimeout(() => {
      ;(async () => await fetchRecipes())()
    }, 2000)
  }, [])

  const addRecipe = async (recipe) => {
    //const id = recipes.length ? recipes[recipes.length - 1].id + 1 : 1
    const myNewRecipe = {
      title: recipe.title,
      image: recipe.image,
      instructions: recipe.instructions,
    }
    setRecipeID(1)
    const listRecipes = [...recipes, myNewRecipe]
    setRecipes(listRecipes)

    const postOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(myNewRecipe),
    }
    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newRecipe) return
    addRecipe(newRecipe)
    setNewRecipe({
      id: null,
      title: '',
      image: '',
      instructions: '',
    })
  }

  const handleDelete = async (id) => {
    if (recipes.length === 2 && recipeID === 1) {
      setRecipeID(0)
    } else {
      setRecipeID(1)
    }
    const indexR = recipes.splice(id, 1)
    const listR = recipes.filter((recipe) => recipe !== indexR)
    console.log('listR', listR)

    setRecipes(listR)

    const deleteOptions = { method: 'DELETE' }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, deleteOptions)
    if (result) setFetchError(result)
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
        <Navbar Logout={Logout} search={search} setSearch={setSearch} />
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
                resSearch={recipes.filter((recipe) =>
                  recipe.title.toLowerCase().includes(search.toLowerCase())
                )}
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
