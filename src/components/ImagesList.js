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
      const images = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setImages(images)
      console.log(images)
    })
  }, [])
  return (
    <div className={styles.imagesContainer}>
      {images.length === 0 ? (
        <p>No images found.</p>
      ) : (
        images.map((image) => (
          <div className={styles.imageDiv} key={images.id}>
            {images[0].Description}
            <img src={images[0].Image}></img>
          </div>
        ))
      )}
    </div>
  )
}

export default ImageList
