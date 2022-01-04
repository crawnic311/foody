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
        <div className={styles.RecipeTitle} id="title">
          {recipes[recipeID].title}
        </div>
        <div className={styles.Recipe}>
          <img
            src={recipes[recipeID].image}
            alt=""
            className={styles.RecipeImage}
          />
          <div className={styles.RecipeDescription}>
            {recipes[recipeID].instructions}
          </div>
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
              console.log(recipeID)
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