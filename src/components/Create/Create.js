import React, { useState } from 'react'
import styles from './Create.module.css'
import { FaPlus } from 'react-icons/fa'

const Create = ({ newRecipe, setNewRecipe }) => {
  const [recipeDetails, setRecipeDetails] = useState({
    id: 0,
    userid: 0,
    title: '',
    image: '',
    instructions: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    //new funciton
    console.log(recipeDetails)
  }

  return (
    <form className={styles.createRecipe} onSubmit={handleSubmit}>
      <label htmlFor="createRecipe">Create Recipe</label>
      <input
        id={styles.titleInput}
        placeholder="Recipe Title"
        value={recipeDetails.title}
        required
        onChange={(e) =>
          setRecipeDetails({ ...recipeDetails, title: e.target.value })
        }
      ></input>
      <input
        id={styles.titleInput}
        placeholder="Recipe Title"
        value={recipeDetails.instructions}
        required
        onChange={(e) =>
          setRecipeDetails({ ...recipeDetails, instructions: e.target.value })
        }
      ></input>
      <input
        id={styles.titleInput}
        placeholder="Optional: Upload an photo for your recipe"
        value={recipeDetails.image}
        onChange={(e) =>
          setRecipeDetails({ ...recipeDetails, image: e.target.value })
        }
      ></input>
      <button
        type="submit"
        aria-label="Create Item"
        className={styles.createSubmit}
      >
        <FaPlus />
      </button>
    </form>
  )
}

export default Create
