import React from 'react'
import styles from './Footer.module.css'

const Footer = (props) => {
  return (
    <div className={styles.footerBox}>
      <img src="../imgs/phaserLogo.png" alt="" />
      <span>Phaser3 Game</span>
      <span>Back</span>
      <p>
        Created by <span className={styles.mr}>Mr</span>{' '}
        <span>Lee Seong Eun</span>. All rights reserved by{' '}
        <span className={styles.mr}>Mr</span> <span>Lee Seong Eun</span>
      </p>
    </div>
  )
}

export default Footer
