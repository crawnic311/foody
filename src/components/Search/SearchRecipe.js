import React from 'react'

import styles from './SearchRecipe.modules.css'

const SearchRecipe = ({
  search,
  setSearch,
  recipeID,
  setRecipeID,
  recipes,
  placeholder,
}) => {
  return (
    <form className={styles.SearchRecipe} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" className={styles.searchLabel}></label>
      <input
        id="search"
        type="text"
        role="searchbox"
        placeholder={placehoder}
      />
    </form>
  )
}

export default SearchRecipe
