import React from 'react'
import styles from './home.module.css'
import RecipeList from './recipes/recipeList'

const Home = ({
  displayRecipe,
  setDisplayRecipe,
  recipes,
  handleDelete,
  images,
  setImages,
}) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <RecipeList
            displayRecipe={displayRecipe}
            setDisplayRecipe={setDisplayRecipe}
            recipes={recipes}
            handleDelete={handleDelete}
            images={images}
            setImages={setImages}
          />
        </div>
      </main>
    </div>
  )
}

export default Home