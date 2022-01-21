import React from 'react'
import styles from './SearchRecipe.module.css'
import SearchIcon from '@mui/icons-material/Search'

const SearchRecipe = ({ placeholder, data }) => {
  return (
    <div className={styles.SearchRecipes}>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder={placeholder}
          className={styles.searchInput}
        />
        <div className={styles.searchIcon}>
          <searchIcon />
        </div>
      </div>
      <div className={styles.searchResult} />
    </div>
  )
}

export default SearchRecipe
