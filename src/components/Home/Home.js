import React from 'react'
import styles from './Home.module.css'
import RecipeList from './Recipes/RecipeList'

const Home = ({
  displayRecipe,
  setDisplayRecipe,
  recipes,
  setRecipes,
  handleDelete,
  user,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.userDisplay}>
        Welcome, {user.email}, {user.id}
      </p>
      <main className={styles.main}>
        <div className={styles.grid}>
          <RecipeList
            displayRecipe={displayRecipe}
            setDisplayRecipe={setDisplayRecipe}
            recipes={recipes}
            setRecipes={setRecipes}
            handleDelete={handleDelete}
          />
        </div>
      </main>
    </div>
  )
}

export default Home
