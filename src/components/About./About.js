import React from 'react'
import Built from './Built/built'
import styles from './about.module.css'

const About = ({ imageSrc, setImageSrc, uploadData, setUploadData }) => {
  return (
    <div>
      <p className={styles.built}>Built using: </p>
      <Built />
    </div>
  )
}

export default About
