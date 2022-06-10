import React, { useState } from 'react'
import styles from './searchRecipe.module.css'

const SearchRecipe = ({
  placeholder,
  data,
  displayRecipe,
  setDisplayRecipe,
  recipes,
  images,
  setImages,
  displayFB,
  setDisplayFB,
}) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState()

  const handleFilter = (e) => {
    const searchWord = e.target.value
    const newFilter = recipes.filter((value) => {
      //code to test

      // for (let i = 0; recipes.length > i; i++) {
      //   if (recipes[i].id > displayRecipe.id) {
      //     console.log(recipes[i].navid, 'passing recipe')
      //     console.log('for loop runs')
      //     console.log(i, 'i')
      //     imageNavLink(recipes[i].navid)
      //     console.log('previous')
      //     break
      //   }
      // }

      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const imageNavLink = (navID) => {
    let imageLink = images.filter((image) => image.navID === navID)
    console.log(imageLink, 'imageLink')
    setDisplayFB(imageLink[0].imageURL)
    setImageReturn(1)
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
                  console.log(targetRecipe, 'targetRecipe')
                  console.log(targetRecipe.navid, 'navID')
                  imageNavLink(targetRecipe.navid)
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
