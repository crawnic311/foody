import React from 'react'
import styles from './SearchRecipe.modules.css'

const SearchRecipe = ({
  search,
  setSearch,
  recipeID,
  setRecipeID,
  recipes,
}) => {
  return (
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
          const recipeSought = recipes.indexOf(
            (recipe) => recipe.title.toLowerCase === search.toLowerCase
          )
          if (recipeSought !== -1) {
            setRecipeID(recipeSought)
          }
        }}
      />
    </form>
  )
}

export default SearchRecipe
