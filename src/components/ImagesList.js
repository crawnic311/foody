import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db } from '../firebaseConfig'
import styles from './ImagesList.module.css'

const ImageList = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    const imagesRef = collection(db, 'RecipesImages')
    const q = query(imagesRef, orderBy('createdAt', 'desc'))
    onSnapshot(q, (snapshot) => {
      console.log(snapshot)
    })
  })
  return (
    <div className={styles.imagesContainer}>
      {images.length === 0 ? (
        <p>No images found.</p>
      ) : (
        images.map((image) => <div>div</div>)
      )}
    </div>
  )
}

export default ImageList
