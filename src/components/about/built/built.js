import React from 'react'
import styles from './built.module.css'

const Built = () => {
  return (
    <div className={styles.SkillContainer}>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../../skills-icons/JavaScript Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>JavaScript</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../../skills-icons/React Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>React</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../../skills-icons/Firebase Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>Firebase</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../../skills-icons/HTML Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>HTML</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../../skills-icons/CSS Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>CSS</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../../skills-icons/Express Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>Express</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../../skills-icons/PostgreSQL Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>PostgreSQL</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../../skills-icons/Node Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>Node</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../../skills-icons/Sequelize Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>Sequelize</p>
      </div>
      <div className={styles.SkillsFlexItem}>
        <img
          src={require('../../../skills-icons/Axios Icon.png')}
          alt=""
          className={styles.SkillsIcon}
        />
        <p className={styles.SkillsText}>Axios</p>
      </div>
    </div>
  )
}

export default Built
