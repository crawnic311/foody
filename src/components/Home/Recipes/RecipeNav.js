import React from 'react'
import styles from './RecipeNav.module.css'

const RecipeNav = () => {
  return (
    <div className={styles.RecipeNavInner}>
      <button id={styles.recipeBack}>Back</button>
      <button id={styles.recipeForward}>Next</button>
    </div>
  )
}

export default RecipeNav
