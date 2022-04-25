import React, { useState } from 'react'
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import styles from './AddImage.module.css'
import { toast } from 'react-toastify/dist/react-toastify.cjs.development'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage, db, auth } from '../firebaseConfig'

const addImage = ({ images, setImages, newRecipe, setNewRecipe }) => {
  const [formData, setFormData] = useState({
    image: '',
    navID: '',
    createdAt: Timestamp.now().toDate(),
  })
  const [file, setFile] = useState()

  const [progress, setProgress] = useState(0)

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] })
  }

  const handleUpload = () => {
    if (!formData.image) {
      alert('Please fill all the fields')
      return
    }
    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    )
    const uploadImage = uploadBytesResumable(storageRef, formData.image)

    uploadImage.on(
      'state_changed',
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(progressPercent)
        console.log(snapshot, 'Snapshot')
      },
      (err) => {
        console.log(err)
      },
      () => {
        setFormData({
          image: '',
          navID: '',
        })

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const imageRef = collection(db, 'RecipesImages')
          addDoc(imageRef, {
            imageURL: url,
            navID: images.length,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              toast('Image added successfully', { type: 'success' })
              setProgress(0)
              console.log('image added succesfully')
            })
            .catch((err) => {
              toast('Error adding Image', { type: 'error' })
            })
        })
      }
    )
    setFile('')
  }
  return (
    <div className={styles.addImageContainer}>
      {/*Image*/}
      <label htmlFor="">Image</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        value={file}
        className={styles.chooseFile}
        onChange={(e) => handleImageChange(e)}
      />
      {progress === 0 ? null : (
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }}>
            {`Uploading Image ${progress}%`}
          </div>
        </div>
      )}
      <button className={styles.createSubmit} onClick={handleUpload}>
        CREATE
      </button>
    </div>
  )
}

export default addImage
