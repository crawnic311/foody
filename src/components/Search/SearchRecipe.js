import React from 'react'
import styles from './SearchRecipe.modules.css'

const SearchRecipe = ({ placeholder, data }) => {
  return (
    <div className={styles.SearchRecipe}>
      <div className={styles.searchInput}>
        <input type="text" placeholder={placeholder} />
        <div className={styles.searchIcon}></div>
      </div>
      <div className={styles.searchResult} />
    </div>
  )
}

export default SearchRecipe
