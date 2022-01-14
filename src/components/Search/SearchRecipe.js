import React from 'react'
import { Select } from 'react-select'

import styles from './SearchRecipe.modules.css'

const SearchRecipe = ({
  search,
  setSearch,
  recipeID,
  setRecipeID,
  recipes,
}) => {
  const searchList = recipes.map(({ recipe }) => {
    return {
      value: recipe,
      label: recipe,
    }
  })

  const handleChange = (selectedOption) => {
    setSearch({ selectedOption })
  }
  return (
    <div className={styles.searchLabel}>
      <Select />
    </div>

    /*
    <form className={styles.SearchRecipe} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" className={styles.searchLabel}></label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder="Search Recipes"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
          let recipeTitles = recipes.map((recipe) => recipe.title.toLowerCase())
          let recipeSought = recipeTitles.indexOf(search.toLowerCase())
          console.log(recipeSought)
          console.log(recipeTitles)
          if (recipeSought !== -1) {
            setRecipeID(recipeSought)
          }
        }}
      />
    </form>
    */
  )
}

export default SearchRecipe
