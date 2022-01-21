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
          <SearchIcon />
        </div>
      </div>
      <div className={styles.searchResult} />
      {data.recipes.map((value, key) => {
        return <div>{value.title}</div>
      })}
    </div>
  )
}

export default SearchRecipe
