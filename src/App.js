import React, { useState, useEffect } from 'react'
import recipeData from './db.json'
import Home from './components/Home/Home'
import About from './components/About./About'
import Create from './components/Create/Create'
import Navbar from './components/Navbar/Navbar'
import LoginForm from './components/Login/loginform'
import PageNotFound from './components/404/PageNotFound'
import { useNavigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'

function App() {
  let navigate = useNavigate()
  const adminUser = {
    name: '',
    email: 'dillon.craw@gmail.com',
    password: '123',
  }

  const [user, setUser] = useState({ name: '', email: 'j', password: '' })
  const [error, setError] = useState('')
  const [search, setSearch] = useState(null)
  const [recipeID, setRecipeID] = useState(0)
  const [newRecipe, setNewRecipe] = useState({
    id: '',
    title: '',
    image: '',
    description: '',
    servings: '',
    prepTime: '',
    cookTime: '',
    instructions: ['', ''],
    nav_id: 0,
  })

  const [recipes, setRecipes] = useState([
    {
      title: 'Your first recipe will display here',
      image: 'Your first recipe will display here',
      description: 'A description of your first recipe will display here',
      servings: 0,
      prepTime: 0,
      cookTime: 0,
      instructions: [],
      nav_id: 0,
    },
  ])

  const fetchRecipesDB = async () => {
    axios
      .get('http://localhost:3700/api/recipes')
      .then((res) => {
        console.log(res)
        setRecipes(res.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchRecipesDB()
  }, [])

  const addRecipe = async (recipe) => {
    const id = recipes.length ? recipes[recipes.length - 1].id + 1 : 1
    const myNewRecipe = {
      id: id,
      title: recipe.title,
      image: recipe.image,
      description: recipe.description,
      servings: recipe.servings,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      instructions: recipe.instructions,
      nav_id: recipe.nav_id,
    }

    axios
      .post('http://localhost:3700/api/recipes', {
        title: myNewRecipe.title,
        image: myNewRecipe.image,
        description: myNewRecipe.description,
        servings: myNewRecipe.servings,
        prepTime: myNewRecipe.prepTime,
        cookTime: myNewRecipe.cookTime,
        instructions: myNewRecipe.instructions,
        user_id: 2,
      })
      .then((res) => fetchRecipesDB())
      .then(() => setRecipeID(1))
      .catch((err) => console.log(err))

    setNewRecipe(recipes.length)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newRecipe) return
    addRecipe(newRecipe)

    //Resets defualt values for create recipe form
    setNewRecipe({
      id: '',
      title: '',
      image: '',
      description: '',
      servings: '',
      prepTime: '',
      cookTime: '',
      instructions: ['', ''],
    })
  }

  const handleIDUpdate = async () => {
    axios
      .put(`http://localhost:3700/api/recipes/`)
      .then((res) => fetchRecipesDB())
      .catch((err) => console.log(err))
  }

  const handleDelete = async (title) => {
    if (recipes.length == 2) {
      setRecipeID(0)
    } else {
      setRecipeID(1)
    }

    const findRID = recipes.find((recipe) => recipe.title === title)
    console.log(findRID.id)
    axios
      .delete(`http://localhost:3700/api/recipes/${findRID.id}`)
      .then((res) => fetchRecipesDB())
      .catch((err) => console.log(err))

    handleIDUpdate()
  }

  const Login = (details) => {
    setUser({
      name: details.name,
      email: details.email,
      password: details.password,
    })
    console.log(details)

    axios
      .post('http://localhost:3700/api/register', {
        name: details.name,
        email: details.email,
        password: details.password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log('Logged in')
      navigate('/home')
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
        {user.email !== '' ? (
          <Navbar
            Logout={Logout}
            search={search}
            setSearch={setSearch}
            recipeID={recipeID}
            setRecipeID={setRecipeID}
            recipes={recipes}
            recipeData={recipeData}
          />
        ) : (
          <div></div>
        )}
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
