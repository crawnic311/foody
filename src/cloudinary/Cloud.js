import React from 'react'

const Cloud = () => {
  const uploadImage = (files) => {
    console.log(files[0])
  }

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          uploadImage(e.target.files)
        }}
      />
    </div>
  )
}

export default Cloud
