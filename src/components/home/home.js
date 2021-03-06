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
  displayFB,
  setDisplayFB,
  imageReturn,
  setImageReturn,
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
            displayFB={displayFB}
            setDisplayFB={setDisplayFB}
            imageReturn={imageReturn}
            setImageReturn={setImageReturn}
          />
        </div>
      </main>
    </div>
  )
}

export default Home
