import React, { useState } from 'react'
import styles from './Home.module.css'
import RecipeList from './Recipes/RecipeList'

const Home = ({ recipeID, setRecipeID, recipes, setRecipes, handleDelete }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <RecipeList
            recipeID={recipeID}
            setRecipeID={setRecipeID}
            recipes={recipes}
            setRecipes={setRecipes}
            handleDelete={handleDelete}
          />
        </div>
        <button className={styles.demo}>Water</button>
      </main>
    </div>
  )
}

export default Home
