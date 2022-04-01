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
  currentUserID,
  setCurrentUserID,
  images,
  setImages,
  stayLogged,
  setStayLogged,
}) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <RecipeList
            displayRecipe={displayRecipe}
            setDisplayRecipe={setDisplayRecipe}
            recipes={recipes}
            setRecipes={setRecipes}
            handleDelete={handleDelete}
            currentUserID={currentUserID}
            setCurrentUserID={setCurrentUserID}
            images={images}
            setImages={setImages}
            stayLogged={stayLogged}
            setStayLogged={setStayLogged}
          />
        </div>
      </main>
    </div>
  )
}

export default Home
