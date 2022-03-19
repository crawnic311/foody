import React from 'react'
import Built from './Built/built'
import styles from './about.module.css'
import Images from '../Images'
import AddImage from '../AddImage'

const About = ({ imageSrc, setImageSrc, uploadData, setUploadData }) => {
  return (
    <div>
      <p className={styles.built}>Built using: </p>
      <Built />
      <Images />
      <AddImage />
    </div>
  )
}

export default About
