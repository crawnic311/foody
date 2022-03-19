import React, { useState } from 'react'
import styles from './Images.module.css'

const images = () => {
  const [images, setImages] = useState([])
  return (
    <div className={styles.imagesContainer}>
      {images.length === 0 ? <p>No images found.</p> : <div>div</div>}
    </div>
  )
}

export default images
