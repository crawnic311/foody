import React, { useState, useEffect } from 'react'
import ImageList from '../../ImagesList'
import { db } from '../../../firebaseConfig'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import styles from './RecipeList.module.css'

const RecipeList = ({
  displayRecipe,
  setDisplayRecipe,
  recipes,
  handleDelete,
  currentUserID,
  setCurrentUserID,
  images,
  setImages,
}) => {
  

  useEffect(() => {
    const imagesRef = collection(db, 'RecipesImages')
    const q = query(imagesRef, orderBy('createdAt', 'desc'))
    onSnapshot(q, (snapshot) => {
      const images = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setImages(images)
      console.log(images)
    })
  }, [])

  return (
    <>
      <div className={styles.RecipeHolder}>
        <div className={styles.Recipe}>
          <div className={styles.RecipeTextHolder}>
            <div className={styles.RecipeTitle} id="title">
              {displayRecipe.title}
            </div>
            <div className={styles.TimeHolder}>
              <span className={styles.rTime}>
                Servings: {displayRecipe.servings}
              </span>
              <span className={styles.rTime}>
                Prep Time: {displayRecipe.prepTime}
              </span>
              <span className={styles.rTime}>
                Cook Time: {displayRecipe.cookTime}
              </span>
            </div>
            <div className={styles.RecipeDescription}>
              <span className={styles.Description}>Description:</span>
              <p className={styles.RecipeDetails}>
                {displayRecipe.description}
              </p>
            </div>
            <div className={styles.RecipeInstructions}>
              <span className={styles.Instructions}>Instructions:</span>
              <p className={styles.InstructionsFor}>
                {displayRecipe.instructions.length >= 1
                  ? `For the ` + displayRecipe.instructions[0] + `: `
                  : 'No instructions added'}
              </p>
              <p className={styles.InstructionsP}>
                {displayRecipe.instructions.length >= 2
                  ? displayRecipe.instructions[1]
                  : ''}
              </p>
              <p className={styles.InstructionsFor}>
                {displayRecipe.instructions.length >= 3
                  ? `For the ` + displayRecipe.instructions[2] + `: `
                  : ''}
              </p>
              <p className={styles.InstructionsP}>
                {displayRecipe.instructions.length >= 4
                  ? displayRecipe.instructions[3]
                  : ''}
              </p>
              <p className={styles.InstructionsFor}>
                {displayRecipe.instructions.length >= 5
                  ? `For the ` + displayRecipe.instructions[4] + `: `
                  : ''}
              </p>
              <p className={styles.InstructionsP}>
                {displayRecipe.instructions.length >= 6
                  ? displayRecipe.instructions[5]
                  : ''}
              </p>
            </div>
          </div>
          <div className={styles.imagesContainer}>
            {images.length === 0 ? (
              <p>No images found.</p>
            ) : (
              images.map((image) => (
                <div className={styles.imageDiv} key={images.id}>
                  {images[0].Description}
                  <img
                    src={images[0].imageURL}
                    className={styles.RecipeImage}
                  ></img>
                </div>
              ))
            )}
          </div>
        </div>
        <div className={styles.RecipeNavInner}>
          <button
            id={styles.recipeBack}
            onClick={() => {
              if (recipes.length > 1) {
                for (let i = recipes.length - 1; i > -1; i--) {
                  if (
                    recipes[i].id < displayRecipe.id &&
                    recipes[i].user_id === currentUserID
                  ) {
                    setDisplayRecipe(recipes[i])
                    break
                  }
                }
              }
            }}
          >
            Previous
          </button>
          <button
            id={styles.recipeDelete}
            onClick={() => {
              if (recipes.length > 1) {
                let title = document.getElementById('title').innerHTML
                handleDelete(title)
              } else {
                alert('cannot delete')
              }
            }}
          >
            Delete
          </button>
          <button
            id={styles.recipeForward}
            onClick={() => {
              if (recipes.length > 1)
                for (let i = 0; recipes.length > i; i++) {
                  if (
                    recipes[i].id > displayRecipe.id &&
                    recipes[i].user_id === currentUserID
                  ) {
                    setDisplayRecipe(recipes[i])
                    break
                  }
                }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default RecipeList
