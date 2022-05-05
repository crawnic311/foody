import React, { useState, useEffect } from 'react'
import { db } from '../../../firebaseConfig'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import styles from './RecipeList.module.css'
//Fix firebase images and prep for demo
const RecipeList = ({
  displayRecipe,
  setDisplayRecipe,
  recipes,
  handleDelete,
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
      console.log(images, 'images')
      console.log(images[0].imageURL)
    })
  }, [])

  const [displayFB, setDisplayFB] = useState()
  const [imageReturn, setImageReturn] = useState(0)

  const imageNavLink = (navID) => {
    let imageLink = images.filter((image) => image.navID === navID)
    console.log(imageLink, 'imageLink')
    setDisplayFB(imageLink[0].imageURL)
    setImageReturn(1)
  }

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
                Prep Time: {displayRecipe.preptime}
              </span>
              <span className={styles.rTime}>
                Cook Time: {displayRecipe.cooktime}
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
              <div className={styles.imageDiv} key={images.id}>
                {images[0].Description}
                {imageReturn === 0 ? (
                  <img
                    src="https://natashaskitchen.com/wp-content/uploads/2019/02/Meatloaf-Recipe-5.jpg"
                    className={styles.RecipeImage}
                  ></img>
                ) : (
                  <img src={displayFB} className={styles.RecipeImage}></img>
                )}
              </div>
            )}
          </div>
        </div>
        <div className={styles.RecipeNavInner}>
          <button
            id={styles.recipeBack}
            onClick={() => {
              if (recipes.length > 1) {
                for (let i = recipes.length - 1; i > -1; i--) {
                  if (recipes[i].id < displayRecipe.id) {
                    setDisplayRecipe(recipes[i])
                    imageNavLink(recipes[i].navid)
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
                  if (recipes[i].id > displayRecipe.id) {
                    setDisplayRecipe(recipes[i])
                    console.log(recipes[i].navid, 'passing recipe')
                    imageNavLink(recipes[i].navid)
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
