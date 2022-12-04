import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.div}>
      <div className={styles.div1}>Cover your page.</div>
      <div className={styles.div2}>
        Cover is a one-page template for building simple and beautiful home
        pages. Download, edit the text, and add your own fullscreen background
        photo to make it your own.
      </div>
      <button>Learn more</button>
    </div>
  )
}

export default Home
