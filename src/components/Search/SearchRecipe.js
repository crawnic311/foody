import React, { useState } from 'react'
import styles from './SearchRecipe.module.css'
import SearchIcon from '@mui/icons-material/Search'

const SearchRecipe = ({ placeholder, data, setRecipeID }) => {
  const [filteredData, setFilteredData] = useState([])

  const handleFilter = (e) => {
    const searchWord = e.target.value
    const newFilter = data.recipes.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
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
      </div>
      {filteredData.length != 0 && (
        <div className={styles.searchResult}>
          {data.recipes.slice(0, 10).map((value, key) => {
            return (
              <button className={styles.dataItem}>
                <p>{value.title}</p>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SearchRecipe
