import React from 'react'
import styles from './AddImage.module.css'

const addImage = () => {
  return (
    <div className={styles.addImageContainer}>
      Upload Image
      <h2>Upload Image</h2>
      <label htmlFor="">Title</label>
      <input type="text" name="title" className={styles.formControl} />
      {/*Description*/}
      <label htmlFor="">Description</label>
      <textarea name="description" className={styles.formControl} />
      {/*Image*/}
      <label htmlFor="">Image</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        className={styles.formControl}
      />
      <div className={styles.progress}>
        <div className={styles.progressBar}>50%</div>
      </div>
      <button className={styles.formControl}>Upload</button>
    </div>
  )
}

export default addImage
