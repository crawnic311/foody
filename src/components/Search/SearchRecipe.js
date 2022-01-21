import React, { useState } from 'react'
import styles from './SearchRecipe.module.css'
import SearchIcon from '@mui/icons-material/Search'

const SearchRecipe = ({ placeholder, data, setRecipeID }) => {
  const [filteredData, setFilteredData] = useState([])

  const handleFilter = (e) => {
    const searchWord = e.target.value
    const newFilter = data.filter((value) => {
      return value.title.tolowercase.includes(searchWord.tolowercase)
    })
    setFilteredData(newFilter)
  }
  return (
    <div className={styles.SearchRecipes}>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder={placeholder}
          className={styles.searchInput}
          onChange={handleFilter}
        />
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
      </div>
      <div className={styles.searchResult} />
      {data.recipes.map((value, key) => {
        return (
          <button className={styles.dataItem}>
            <p>{value.title}</p>
          </button>
        )
      })}
    </div>
  )
}

export default SearchRecipe
