import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import styles from './RecipeList.module.css'
import FruitBowl from '../../../images/Breakfast-Fruit-Bowl-Recipe.jpeg'
import Cake from '../../../images/Cake-Recipe.jpeg'
import Potato from '../../../images/Potatoe-Chives-Recipe-Image.jpeg'
import Salmon from '../../../images/Salmon-Stew-Recipe.png'

const RecipeList = ({ recipeID, setRecipeID, recipes, handleDelete }) => {
  const [displayRecipe, setDisplayRecipe] = useState({
    id: 0,
    title: 'display test',
    image: '',
    description: 'display test',
    servings: '99',
    prepTime: '99',
    cookTime: '99',
    instructions: ['Inst', 'Ruct'],
  })

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
          <img
            src={recipes[recipeID].image}
            alt=""
            className={styles.RecipeImage}
          />
        </div>
        <div className={styles.RecipeNavInner}>
          <button
            id={styles.recipeBack}
            onClick={() => {
              if (recipes.length > 1) {
                for (let i = recipes.length - 1; i > -1; i--) {
                  if (recipes[i].id < displayRecipe.id) {
                    setDisplayRecipe(recipes[i])
                    console.log('displayRecipe', displayRecipe)
                    console.log('Break')
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
              console.log(recipes.id)
              if (recipes.length > 1 && recipeID !== 0) {
                let title = document.getElementById('title').innerHTML
                console.log(title)
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
                console.log('recipesLength Greater than 1')
              console.log('displayRecipe', displayRecipe)
              //setRecipeID(recipeID + 1)
              for (let i = 0; recipes.length > i; i++) {
                if (recipes[i].id > displayRecipe.id) {
                  setDisplayRecipe(recipes[i])
                  console.log('displayRecipe', displayRecipe)
                  console.log('Break')
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
