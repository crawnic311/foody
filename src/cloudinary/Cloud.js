import React, { useState } from 'react'
import axios from 'axios'

const Cloud = () => {
  const [image, setImage] = useState('')

  const uploadImage = (files) => {
    const formData = new FormData()
    formData.append('file', files[0])
    formData.append('upload_preset', 'kgvi7e5c')

    axios
      .post('https://api.cloudinary.com/v1/doybhneia/image/upload', formData)
      .then((response) => {
        console.log(response)
      })
  }

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0])
        }}
      />
      <button onClick={uploadImage}>Upload Image to Cloudinary</button>
    </div>
  )
}

export default Cloud
