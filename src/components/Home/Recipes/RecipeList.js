import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import styles from './RecipeList.module.css'
import FruitBowl from '../../../images/Breakfast-Fruit-Bowl-Recipe.jpeg'
import Cake from '../../../images/Cake-Recipe.jpeg'
import Potato from '../../../images/Potatoe-Chives-Recipe-Image.jpeg'
import Salmon from '../../../images/Salmon-Stew-Recipe.png'

const RecipeList = () => {
  const [recipeID, setRecipeID] = useState(0)
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
            onClick={() => {
              if (recipeID > 0) {
                setRecipeID(recipeID - 1)
              }
            }}
          >
            Previous
          </button>
          <button
            id={styles.recipeForward}
            onClick={() => {
              if (recipeID < recipes.length - 1) {
                setRecipeID(recipeID + 1)
              }
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
