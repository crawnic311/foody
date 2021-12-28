import React, { useState } from 'react'
import styles from './Home.module.css'
import RecipeList from './Recipes/RecipeList'

const Home = ({ recipes, setRecipes }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <RecipeList recipes={recipes} setRecipes={setRecipes} />
        </div>
      </main>
    </div>
  )
}

export default Home
