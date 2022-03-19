import React from 'react'
import Built from './Built/built'
import styles from './about.module.css'
import ImageList from '../ImagesList'
import AddImage from '../AddImage'

const About = ({ imageSrc, setImageSrc, uploadData, setUploadData }) => {
  return (
    <div>
      <p className={styles.built}>Built using: </p>
      <Built />
      <ImageList />
      <AddImage />
    </div>
  )
}

export default About
