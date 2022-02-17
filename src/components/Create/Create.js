import React, { useState, useEffect } from 'react'
import styles from './Create.module.css'
import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'
import axios from 'axios'

const Create = ({
  newRecipe,
  setNewRecipe,
  handleSubmit,
  setImageSrc,
  imageSrc,
  uploadData,
  setUploadData,
  recipes,
}) => {
  const inputRef = useRef()

  const handleFileChange = (e) => {
    const reader = new FileReader()

    reader.onload = (e) => {
      setImageSrc(e.target.result)
      setUploadData(undefined)
    }

    reader.readAsDataURL(e.target.files[0])

    const form = e.currentTarget
    console.log(form, 'form Onchange')
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    console.log(form)
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === 'file'
    )
    console.log(fileInput)

    const formData = new FormData()
    console.log(fileInput.files)

    for (const file of fileInput.files) {
      formData.append('file', file)
    }
    //error
    console.log(formData)

    formData.append('upload_preset', 'my-uploads')

    console.log(formData)

    const data = await fetch(
      'https://api.cloudinary.com/v1_1/doybhneia/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    ).then((r) => r.json())

    setImageSrc(data.secure_url)
    setUploadData(data)

    console.log(data, 'data')
    console.log(data.secure_url, 'Secure_url')
  }

  return (
    <form
      method="post"
      className={styles.createRecipe}
      onSubmit={(e) => {
        handleSubmit(e)
        handleUpload(e)
      }}
    >
      <label htmlFor="createRecipe">Create Recipe</label>
      <input
        autoFocus
        ref={inputRef}
        id={styles.titleInput}
        placeholder="Recipe Title"
        value={newRecipe.title}
        required
        onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
      ></input>
      <input
        id={styles.descriptionInput}
        placeholder="Recipe Description"
        value={newRecipe.description}
        required
        onChange={(e) =>
          setNewRecipe({ ...newRecipe, description: e.target.value })
        }
      ></input>
      <input
        id={styles.titleInput}
        placeholder="Servings"
        value={newRecipe.servings}
        onChange={(e) =>
          setNewRecipe({ ...newRecipe, servings: e.target.value })
        }
      ></input>
      <input
        id={styles.titleInput}
        placeholder="Prep Time (minutes)"
        value={newRecipe.prepTime}
        onChange={(e) =>
          setNewRecipe({ ...newRecipe, prepTime: e.target.value })
        }
      ></input>
      <input
        id={styles.titleInput}
        placeholder="Cook Time (minutes)"
        value={newRecipe.cookTime}
        onChange={(e) =>
          setNewRecipe({ ...newRecipe, cookTime: e.target.value })
        }
      ></input>
      <input
        id={styles.titleInput}
        placeholder="Instructions for: (ex. soup, rice, etc)"
        value={newRecipe.instructions[0]}
        onChange={(e) =>
          setNewRecipe({
            ...newRecipe,
            instructions: [e.target.value, ''],
          })
        }
      ></input>
      <input
        id={styles.titleInput}
        placeholder="Instructions"
        value={newRecipe.instructions[1]}
        onChange={(e) => {
          let array = [newRecipe.instructions[0], e.target.value]
          setNewRecipe({
            ...newRecipe,
            instructions: array,
          })
        }}
      ></input>

      <input
        id={styles.photoInput}
        type="file"
        name="file"
        placeholder="Optional: Upload a photo for your recipe"
        //value={newRecipe.image}
        onChange={(e) => handleFileChange(e)}
      ></input>
      {imageSrc && <img src={imageSrc} className={styles.uploadImage} />}
      <button
        type="submit"
        aria-label="Create Item"
        className={styles.createSubmit}
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus className={styles.FaPlus} />
      </button>
    </form>
  )
}

export default Create
