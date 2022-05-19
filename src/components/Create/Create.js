import React, { useRef } from 'react'
import styles from './Create.module.css'
import AddImage from '../addImage'

const Create = ({
  newRecipe,
  setNewRecipe,
  handleSubmit,
  images,
  setImages,
  recipes,
}) => {
  const inputRef = useRef()

  return (
    <div>
      <form
        method="post"
        className={styles.createRecipe}
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <label htmlFor="createRecipe">Create Recipe</label>
        <input
          autoFocus
          ref={inputRef}
          id={styles.titleInput}
          placeholder="Recipe Title"
          value={newRecipe.title}
          required
          onChange={(e) =>
            setNewRecipe({ ...newRecipe, title: e.target.value })
          }
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
            setNewRecipe({
              ...newRecipe,
              cookTime: e.target.value,
              navID: recipes.length,
            })
          }
        ></input>
        <input
          id={styles.titleInput}
          placeholder="Instructions for: (ex. soup, rice, etc)"
          value={newRecipe.instructions[0]}
          onChange={(e) =>
            setNewRecipe({
              ...newRecipe,
              instructions: [e.target.value, ''],
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
        <AddImage
          newRecipe={newRecipe}
          setNewRecipe={setNewRecipe}
          images={images}
          setImages={setImages}
        />
      </form>
    </div>
  )
}

export default Create
