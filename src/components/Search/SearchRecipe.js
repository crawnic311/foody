import React, { useState } from 'react'
import styles from './SearchRecipe.module.css'

const SearchRecipe = ({ placeholder, data, setRecipeID, recipes }) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState()

  const handleFilter = (e) => {
    const searchWord = e.target.value
    const newFilter = recipes.filter((value) => {
      console.log(value.title.toLowerCase().includes(searchWord.toLowerCase()))
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }
  return (
    <div className={styles.SearchRecipes}>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          value={wordEntered}
          placeholder={placeholder}
          className={styles.searchInput}
          onChange={handleFilter}
        />
      </div>
      {filteredData.length !== 0 && (
        <div className={styles.searchResult}>
          {filteredData.slice(0, 10).map((value) => {
            return (
              <button
                className={styles.dataItem}
                id={value.id}
                onClick={(e) => {
                  setRecipeID(e.target.id - 1)
                  clearInput()
                }}
              >
                {value.title}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SearchRecipe
