import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import styles from './RecipeList.module.css'
import FruitBowl from '../../../images/Breakfast-Fruit-Bowl-Recipe.jpeg'
import Cake from '../../../images/Cake-Recipe.jpeg'
import Potato from '../../../images/Potatoe-Chives-Recipe-Image.jpeg'
import Salmon from '../../../images/Salmon-Stew-Recipe.png'

const RecipeList = ({
  recipeID,
  setRecipeID,
  recipes,
  setRecipes,
  handleDelete,
}) => {
  return (
    <>
      <div className={styles.RecipeHolder}>
        <div className={styles.Recipe}>
          <div className={styles.RecipeTextHolder}>
            <div className={styles.RecipeTitle} id="title">
              {recipes[recipeID].title}
            </div>
            <div className={styles.TimeHolder}>
              <span className={styles.rTime}>
                Servings: {recipes[recipeID].servings}
              </span>
              <span className={styles.rTime}>
                Prep Time: {recipes[recipeID].prepTime}
              </span>
              <span className={styles.rTime}>
                Cook Time: {recipes[recipeID].cookTime}
              </span>
            </div>
            <div className={styles.RecipeDescription}>
              <span className={styles.Description}>Description:</span>
              <p className={styles.RecipeDetails}>
                {recipes[recipeID].description}
              </p>
            </div>
            <div className={styles.RecipeInstructions}>
              <span className={styles.Instructions}>Instructions:</span>
              <p className={styles.InstructionsFor}>
                {recipes[recipeID].instructions.length >= 1
                  ? `For the ` + recipes[recipeID].instructions[0] + `: `
                  : 'No instructions added'}
              </p>
              <p className={styles.InstructionsP}>
                {recipes[recipeID].instructions.length >= 2
                  ? recipes[recipeID].instructions[1]
                  : ''}
              </p>
              <p className={styles.InstructionsFor}>
                {recipes[recipeID].instructions.length >= 3
                  ? `For the ` + recipes[recipeID].instructions[2] + `: `
                  : ''}
              </p>
              <p className={styles.InstructionsP}>
                {recipes[recipeID].instructions.length >= 4
                  ? recipes[recipeID].instructions[3]
                  : ''}
              </p>
              <p className={styles.InstructionsFor}>
                {recipes[recipeID].instructions.length >= 5
                  ? `For the ` + recipes[recipeID].instructions[4] + `: `
                  : ''}
              </p>
              <p className={styles.InstructionsP}>
                {recipes[recipeID].instructions.length >= 6
                  ? recipes[recipeID].instructions[5]
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
              if (recipeID > 1) {
                setRecipeID(recipeID - 1)
              }
              console.log(recipeID)
            }}
          >
            Previous
          </button>
          <button
            id={styles.recipeDelete}
            onClick={() => {
              console.log(recipes.id)
              if (recipes.length > 1) {
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
              if (recipeID < recipes.length - 1) {
                setRecipeID(recipeID + 1)
              }
              console.log(recipes[recipeID].servings)
              console.log(recipes[recipeID].prepTime)
              console.log(recipes[recipeID].cookTime)
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
