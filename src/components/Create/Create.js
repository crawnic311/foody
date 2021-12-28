import React, { useState } from 'react'
import styles from './Create.module.css'
import { FaPlus } from 'react-icons/fa'

const Create = ({ newRecipe, setNewRecipe, handleSubmit }) => {
  return (
    <form className={styles.createRecipe} onSubmit={handleSubmit}>
      <label htmlFor="createRecipe">Create Recipe</label>
      <input
        id={styles.titleInput}
        placeholder="Recipe Title"
        value={newRecipe.title}
        required
        onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
      ></input>
      <input
        id={styles.titleInput}
        placeholder="Recipe Instructions"
        value={newRecipe.instructions}
        required
        onChange={(e) =>
          setNewRecipe({ ...newRecipe, instructions: e.target.value })
        }
      ></input>
      <input
        id={styles.titleInput}
        placeholder="Optional: Upload an photo for your recipe"
        value={newRecipe.image}
        onChange={(e) =>
          setNewRecipe({
            ...newRecipe,
            image: e.target.value,
            id: 0,
          })
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
