import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>{/*<RecipeList />*/}</div>
        <div className={styles.container}>{/*} <RecipeNav />*/}</div>
      </main>
    </div>
  )
}

export default Home
