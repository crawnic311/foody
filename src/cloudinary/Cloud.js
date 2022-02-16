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

  async function handleOnSubmit(event) {
    event.preventDefault()
    console.log(event.currentTarget)
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
