import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchRecipe from '../search/searchRecipe'
import styles from './navbar.module.css'

const Navbar = ({
  recipeData,
  displayRecipe,
  setDisplayRecipe,
  recipes,
  logout,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    console.log('You have logged out.')
  }

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link to="/">
            <span className={styles.navlogo}>
              <img
                src="/foodylogo.png"
                alt="logo"
                width="150"
                height="69"
                className={styles.foodylogo}
              />
            </span>
          </Link>
          <span className={(styles.navlink, styles.searchBar)}>
            <SearchRecipe
              placeholder={'Search for a recipe... 🔍'}
              data={recipeData}
              setDisplayRecipe={setDisplayRecipe}
              recipes={recipes}
            />
          </span>
          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + ' ' + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link to="/home">
                <span className={styles.navlink}>Home</span>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link to="/create">
                <span className={styles.navlink}>Create</span>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link to="/about">
                <span className={styles.navlink}>About</span>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link to="/">
                <button className={styles.navlink} onClick={logout}>
                  Logout
                </button>
              </Link>
            </li>
          </ul>
          <button
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + ' ' + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
    </>
  )
}

export default Navbar
