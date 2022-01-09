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
  )
}

export default SearchRecipe
