import React, { useState } from 'react'
import styles from './RecipeList.module.css'

const RecipeList = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      userId: 5,
      title: 'Curry',
      instructions: 'Mix everything well or suffer the consquences',
    },
    {
      id: 2,
      userId: 3,
      title: 'Fruit Bowl',
      instructions: 'Mix fruits with vigor',
    },
    {
      id: 3,
      userId: 7,
      title: 'Steak',
      instructions: 'Sear on both sides for 90 seconds on high heat',
    },
    {
      id: 4,
      userId: 3,
      title: 'Veggies',
      instructions: 'Drizzle with olive oil and fry in a pan with a lid',
    },
  ])

  const checker = () => {
    console.log(recipes[0].instructions)
  }

  return (
    <div className={styles.RecipeHolder}>
      <div className={styles.Recipe}>
        <img
          src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80"
          alt=""
          className={styles.RecipeImage}
        />
        <div className={styles.RecipeDescription}>
          {recipes[0].instructions}
        </div>
        <button onClick={checker}>Instructions</button>
      </div>
    </div>
  )
}

export default RecipeList
