import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import styles from './RecipeList.module.css'

const RecipeList = () => {
  let recipeNum = 0
  let ID = 0

  const [recipeID, setRecipeID] = useState(0)
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      userId: 5,
      title: 'Curry',
      image:
        'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80',
      instructions: 'Mix everything well or suffer the consquences',
    },
    {
      id: 2,
      userId: 3,
      title: 'Fruit Bowl',
      image: '',
      instructions: 'Mix fruits with vigor',
    },
    {
      id: 3,
      userId: 7,
      title: 'Steak',
      image: '',
      instructions: 'Sear on both sides for 90 seconds on high heat',
    },
    {
      id: 4,
      userId: 3,
      title: 'Veggies',
      image: '',
      instructions: 'Drizzle with olive oil and fry in a pan with a lid',
    },
  ])

  return (
    <>
      <div className={styles.RecipeHolder}>
        <div className={styles.RecipeTitle}>{recipes[recipeID].title}</div>
        <div className={styles.Recipe}>
          <img
            src={recipes[recipeID].image}
            alt=""
            className={styles.RecipeImage}
          />
          <div className={styles.RecipeDescription}>
            {recipes[recipeID].instructions}
          </div>
        </div>
        <div className={styles.RecipeNavInner}>
          <button
            id={styles.recipeBack}
            onClick={() => setRecipeID(recipeID - 1)}
          >
            Previous
          </button>
          <button
            id={styles.recipeForward}
            onClick={() => {
              setRecipeID(recipeID + 1)
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default RecipeList
