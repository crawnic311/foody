import React, { useState, useEffect } from 'react'
import Home from './components/Home/Home'
import About from './components/About./About'
import Create from './components/Create/Create'
import Navbar from './components/Navbar/Navbar'
import LoginForm from './components/Login/loginform'
import PageNotFound from './components/404/PageNotFound'
import { useNavigate } from 'react-router-dom'
import SearchRecipe from './components/Search/SearchRecipe'
import { Routes, Route } from 'react-router-dom'
import apiRequest from './api/apiRequest'
import axios from 'axios'
import './App.css'

function App() {
  let navigate = useNavigate()
  const adminUser = {
    name: '',
    email: 'dillon.craw@gmail.com',
    password: '123',
  }
  const API_URL = 'http://localhost:3500/recipes'

  const [user, setUser] = useState({ name: '', email: 'j', password: '' })
  const [error, setError] = useState('')
  const [fetchError, setFetchError] = useState('')
  const [instruct, setInstruct] = useState('')
  const [search, setSearch] = useState('')
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
    },
  ])

  useEffect(() => {
    const fetchRecipesDB = async () => {
      axios
        .get('http://localhost:3700/api/recipes')
        .then((res) => {
          console.log(res)
          setRecipes(res.data)
        })
        .catch((err) => console.log(err))
    }

    fetchRecipesDB()
  }, [recipeID])

  /*
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
    }, 1000)
  }, [])
  */

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
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

    setNewRecipe(recipes.length)
    /*
    setRecipeID(1)
    const listRecipes = [...recipes, myNewRecipe]
    setRecipes(listRecipes)

    const postOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(myNewRecipe),
    }
    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result)*/
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

  const handleDelete = async (title) => {
    setRecipeID(0)

    const findRID = recipes.find((recipe) => recipe.title === title)
    console.log(findRID.id)
    axios
      .delete(`http://localhost:3700/api/recipes/${findRID.id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

    /*
    const listR = recipes.filter((recipe) => recipe.title !== title)
    console.log('listR', listR)
    console.log('findRID', findRID)

    setRecipes(listR)

    const deleteOptions = { method: 'DELETE' }
    const reqUrl = `${API_URL}/${findRID.id}`
    const result = await apiRequest(reqUrl, deleteOptions)
    if (result) setFetchError(result)
    */
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
                instruct={instruct}
                setInstruct={setInstruct}
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
