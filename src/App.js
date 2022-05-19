import React, { useState, useEffect } from 'react'
import Home from './components/Home/Home'
import About from './components/About./About'
import Create from './components/Create/Create'
import Navbar from './components/Navbar/Navbar'
import LoginForm from './components/login/loginform'
import PageNotFound from './components/404/PageNotFound'
import recipeData from './db.json'
import { auth } from './firebaseConfig'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'

function App() {
  const [stayLogged, setStayLogged] = useState(0)
  const [currentUserID, setCurrentUserID] = useState()
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const [search, setSearch] = useState(null)
  const [uploadData, setUploadData] = useState()
  const [newRecipe, setNewRecipe] = useState({
    id: '',
    title: '',
    image: '',
    description: '',
    servings: '',
    prepTime: '',
    cookTime: '',
    instructions: ['', ''],
    navID: '',
  })

  const [displayRecipe, setDisplayRecipe] = useState({
    id: 0,
    title: 'Your first recipe will display here',
    image:
      'https://natashaskitchen.com/wp-content/uploads/2019/02/Meatloaf-Recipe-5.jpg',
    description: 'A description of your recipe will appear here.',
    servings: 0,
    prepTime: 0,
    cookTime: 0,
    instructions: [],
    navID: 0,
  })
  const [images, setImages] = useState([])

  const [recipes, setRecipes] = useState([
    {
      title: 'Your first recipe will display here',
      image: 'Your first recipe will display here',
      description: 'A description of your first recipe will display here',
      servings: 0,
      prepTime: 0,
      cookTime: 0,
      instructions: [],
      navID: 0,
    },
  ])

  const fetchRecipesDB = async () => {
    axios
      .get('http://localhost:3700/api/recipes')
      .then((res) => {
        setRecipes(res.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchRecipesDB()
    console.log(recipes, 'recipes')
    setStayLogged(1)
  }, [])

  const addRecipe = async (recipe) => {
    const myNewRecipe = {
      title: recipe.title,
      image: recipe.image,
      description: recipe.description,
      servings: recipe.servings,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      instructions: recipe.instructions,
      navID: images.length,
    }
    console.log(myNewRecipe.navID, 'navID')
    axios
      .post('http://localhost:3700/api/recipes', {
        title: myNewRecipe.title,
        image: myNewRecipe.image,
        description: myNewRecipe.description,
        servings: myNewRecipe.servings,
        prepTime: myNewRecipe.prepTime,
        cookTime: myNewRecipe.cookTime,
        instructions: myNewRecipe.instructions,
        navID: myNewRecipe.navID,
      })
      .then(() => fetchRecipesDB())
      .then(() => setDisplayRecipe(recipes[0]))
      .catch((err) => console.log(err))

    setNewRecipe(recipes.length)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newRecipe)

    if (!newRecipe) return
    addRecipe(newRecipe)

    setNewRecipe({
      id: '',
      title: '',
      image: '',
      description: '',
      servings: '',
      prepTime: '',
      cookTime: '',
      instructions: ['', ''],
      navID: '',
    })
  }

  const handleDelete = async (title) => {
    if (recipes.length == 2) {
      setDisplayRecipe(recipes[0])
    } else {
      setDisplayRecipe(recipes[1])
    }

    const findRID = recipes.find((recipe) => recipe.title === title)
    axios
      .delete(`http://localhost:3700/api/recipes/${findRID.id}`)
      .then(() => fetchRecipesDB())
      .catch((err) => console.log(err))
  }

  const logout = async () => {
    await signOut(auth)
    setStayLogged(0)
  }

  return (
    <>
      <div className="App">
        {user?.email || stayLogged == 1 ? (
          <Navbar
            logout={logout}
            search={search}
            setSearch={setSearch}
            displayRecipe={displayRecipe}
            setDisplayRecipe={setDisplayRecipe}
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
            element={
              <LoginForm
                error={error}
                user={user}
                setUser={setUser}
                logout={logout}
                createUserWithEmailAndPassword={createUserWithEmailAndPassword}
                signInWithEmailAndPassword={signInWithEmailAndPassword}
                onAuthStateChanged={onAuthStateChanged}
                signOut={signOut}
                currentUserID={currentUserID}
                setCurrentUserID={setCurrentUserID}
                setStayLogged={setStayLogged}
                stayLogged={stayLogged}
              />
            }
          />
          <Route
            exact
            path="/create"
            element={
              <Create
                newRecipe={newRecipe}
                setNewRecipe={setNewRecipe}
                handleSubmit={handleSubmit}
                images={images}
                setImages={setImages}
                recipes={recipes}
              />
            }
          />
          <Route
            exact
            path="/about"
            element={
              <About uploadData={uploadData} setUploadData={setUploadData} />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                displayRecipe={displayRecipe}
                setDisplayRecipe={setDisplayRecipe}
                recipes={recipes}
                setRecipes={setRecipes}
                handleDelete={handleDelete}
                user={user}
                currentUserID={currentUserID}
                setCurrentUserID={setCurrentUserID}
                images={images}
                setImages={setImages}
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
