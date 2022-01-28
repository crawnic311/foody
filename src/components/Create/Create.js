import React, { useState } from 'react'
import styles from './Create.module.css'
import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const Create = ({ newRecipe, setNewRecipe, handleSubmit }) => {
  const inputRef = useRef()

  const fileSelectHandler = (e) => {
    console.log(e.target.files[0])
    setNewRecipe({
      ...newRecipe,
      image: e.target.value,
    })
  }

  return (
    <form className={styles.createRecipe} onSubmit={handleSubmit}>
      <label htmlFor="createRecipe">Create Recipe</label>
      <input
        autoFocus
        ref={inputRef}
        id={styles.titleInput}
        placeholder="Recipe Title"
        value={newRecipe.title}
        required
        onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
      ></input>
      <input
        id={styles.descriptionInput}
        placeholder="Recipe Description"
        value={newRecipe.description}
        required
        onChange={(e) =>
          setNewRecipe({ ...newRecipe, description: e.target.value })
        }
      ></input>
      <input
        id={styles.titleInput}
        placeholder="Servings"
        value={newRecipe.servings}
        onChange={(e) =>
          setNewRecipe({ ...newRecipe, servings: e.target.value })
        }
      ></input>
      <input
        id={styles.titleInput}
        placeholder="Prep Time (minutes)"
        value={newRecipe.prepTime}
        onChange={(e) =>
          setNewRecipe({ ...newRecipe, prepTime: e.target.value })
        }
      ></input>
      <input
        id={styles.titleInput}
        placeholder="Cook Time (minutes)"
        value={newRecipe.cookTime}
        onChange={(e) =>
          setNewRecipe({ ...newRecipe, cookTime: e.target.value })
        }
      ></input>
      <input
        id={styles.titleInput}
        placeholder="Instructions for: (ex. soup, rice, etc)"
        value={newRecipe.instructions[0]}
        onChange={(e) =>
          setNewRecipe({
            ...newRecipe,
            instructions: [e.target.value],
          })
        }
      ></input>
      <input
        id={styles.titleInput}
        placeholder="Instructions"
        value={newRecipe.instructions[1]}
        onChange={(e) => {
          let array = [newRecipe.instructions[0], e.target.value]
          setNewRecipe({
            ...newRecipe,
            instructions: array,
          })
        }}
      ></input>

      <input
        id={styles.titleInput}
        type="file"
        placeholder="Optional: Upload a photo for your recipe"
        value={newRecipe.image}
        onChange={(e) => fileSelectHandler(e)}
      ></input>
      <button
        type="submit"
        aria-label="Create Item"
        className={styles.createSubmit}
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  )
}

export default Create
