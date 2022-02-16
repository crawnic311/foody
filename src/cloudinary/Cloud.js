import React, { useState } from 'react'
import axios from 'axios'

const Cloud = () => {
  const [imageSrc, setImageSrc] = useState()
  const [uploadData, setUploadData] = useState()

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader()

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result)
      setUploadData(undefined)
    }

    reader.readAsDataURL(changeEvent.target.files[0])
  }

  async function handleOnSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === 'file'
    )

    const formData = new FormData()

    for (const file of fileInput.files) {
      formData.append('file', file)
    }

    const data = await.fetch('https://api.cloudinary.com/v1_1/doybhneia/image/upload', {
      method: 'POST', 
      body: formData
    }).then(r => r.json())

  }

  return (
    <div>
      <form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
        <p>
          <input type="file" name="file" />
        </p>

        <img src={imageSrc} height={500} />

        {imageSrc && !uploadData && (
          <p>
            <button>Upload Files</button>
          </p>
        )}

        {uploadData && (
          <code>
            <pre>{JSON.stringify(uploadData, null, 20)}</pre>
          </code>
        )}
      </form>
    </div>
  )
}

export default Cloud
