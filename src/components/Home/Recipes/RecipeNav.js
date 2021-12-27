import React from 'react'
import styles from './RecipeNav.module.css'

const RecipeNav = () => {
  const nextHandler = () => {
    console.log('Here is the next recipe')
  }

  const backHandler = () => {
    console.log('Here is the previous recipe')
  }

  return (
    <div className={styles.RecipeNavInner}>
      <button id={styles.recipeBack} onClick={backHandler}>
        Back
      </button>
      <button id={styles.recipeForward} onClick={nextHandler}>
        Next
      </button>
    </div>
  )
}

export default RecipeNav
