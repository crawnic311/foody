import React from 'react'
import Built from './Built/built'

const About = ({ imageSrc, setImageSrc, uploadData, setUploadData }) => {
  return (
    <div>
      <p>Built using </p>
      <Built />
    </div>
  )
}

export default About
