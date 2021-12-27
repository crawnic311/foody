import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = (props) => {
  const Logout = props.Login
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    console.log('You have logged out')
  }

  const handleLogout2 = (e) => {
    console.log(e)
  }

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link to="/">
            <span className={styles.navlogo}>
              <img
                src="/foody-logo.png"
                alt="logo"
                width="150"
                height="69"
                className={styles.foodylogo}
              />
            </span>
          </Link>
          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + ' ' + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link to="/">
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
                <button onClick={handleLogout}>
                  <span className={styles.navlink}>Logout</span>
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
