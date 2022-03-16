import React from 'react'
import styles from './built.module.css'

const Built = () => {
  return (
    <div className={styles.SkillContainer}>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../skills-icons/JavaScript Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>JavaScript</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../skills-icons/React Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>React</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../skills-icons/Redux Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>Redux</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../skills-icons/HTML Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>HTML</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../skills-icons/CSS Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>CSS</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../skills-icons/Express Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>Express</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../skills-icons/PostgreSQL Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>PostgreSQL</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../skills-icons/Node Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>Node</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../skills-icons/C++ Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>C++</p>
      </div>
    </div>
  )
}

export default Built
