import React, { useState } from 'react'
import styles from './SearchRecipe.module.css'

const SearchRecipe = ({
  placeholder,
  data,
  displayRecipe,
  setDisplayRecipe,
  recipes,
}) => {
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
                key={value.title}
                onClick={(e) => {
                  var targetRecipe = 0
                  for (let i = 0; recipes.length > i; i++) {
                    if (recipes[i].id == e.target.id) {
                      targetRecipe = recipes[i]
                      break
                    }
                  }
                  setDisplayRecipe(targetRecipe)
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
