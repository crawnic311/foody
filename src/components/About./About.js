import React from 'react'
import Cloud from '../../cloudinary/Cloud'

const About = ({ imageSrc, setImageSrc, uploadData, setUploadData }) => {
  return (
    <div>
      <Cloud
        imageSrc={imageSrc}
        setImageSrc={setImageSrc}
        uploadData={uploadData}
        setUploadData={setUploadData}
      />
    </div>
  )
}

export default About
