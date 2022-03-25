import React, { useState } from 'react'
import { Timestamp, collection, addDoc } from 'firebase/firestore'
import styles from './AddImage.module.css'
import { toast } from 'react-toastify/dist/react-toastify.cjs.development'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage, db, auth } from '../firebaseConfig'

const addImage = ({ images, setImages }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    navID: '',
    createdAt: Timestamp.now().toDate(),
  })

  const [progress, setProgress] = useState(0)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] })
  }

  const handleUpload = () => {
    if (!formData.title || !formData.description || !formData.image) {
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
          title: '',
          description: '',
          image: '',
          navID: '',
        })

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const imageRef = collection(db, 'RecipesImages')
          addDoc(imageRef, {
            title: formData.title,
            description: formData.description,
            imageURL: url,
            navID: images.length,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              toast('Image added successfully', { type: 'success' })
              setProgress(0)
            })
            .catch((err) => {
              toast('Error adding Image', { type: 'error' })
            })
        })
      }
    )
  }
  return (
    <div className={styles.addImageContainer}>
      Upload Image
      <h2>Upload Image</h2>
      <label htmlFor="">Title</label>
      <input
        type="text"
        name="title"
        className={styles.formControl}
        value={formData.title}
        onChange={(e) => {
          handleChange(e)
        }}
      />
      {/*Description*/}
      <label htmlFor="">Description</label>
      <textarea
        name="description"
        className={styles.formControl}
        value={formData.description}
        onChange={(e) => {
          handleChange(e)
        }}
      />
      {/*Image*/}
      <label htmlFor="">Image</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        className={styles.formControl}
        onChange={(e) => handleImageChange(e)}
      />
      {progress === 0 ? null : (
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }}>
            {`Uploading Image ${progress}%`}
          </div>
        </div>
      )}
      <button className={styles.formControl} onClick={handleUpload}>
        Upload
      </button>
    </div>
  )
}

export default addImage
