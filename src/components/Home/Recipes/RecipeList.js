import React from 'react'
import styles from './RecipeList.module.css'

const RecipeList = () => {
  return (
    <div className={styles.RecipeHolder}>
      <div className={styles.Recipe}>
        <img
          src="https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80"
          alt=""
          className={styles.RecipeImage}
        />
        <div className={styles.RecipeDescription}>
          This is a recipe that tastes so good. You would love to eat it if I
          let you. Maybe one day you will be allowed to eat it.
        </div>
      </div>
    </div>
  )
}

export default RecipeList
