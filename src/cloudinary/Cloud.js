import React, { useState } from 'react'

const Cloud = ({ imageSrc, setImageSrc, uploadData, setUploadData }) => {
  const handleOnChange = (e) => {
    const reader = new FileReader()

    reader.onload = (e) => {
      console.log(e.target.result)
      setImageSrc(e.target.result)
      setUploadData(undefined)
    }

    reader.readAsDataURL(e.target.files[0])
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

    formData.append('upload_preset', 'my-uploads')

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
