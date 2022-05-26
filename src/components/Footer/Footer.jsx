import React from 'react'
import styles from './Footer.module.css'

const Footer = (props) => {
  return (
    <div className={styles.footerBox}>
      <img src="../imgs/phaserLogo.png" alt="" />
      <span>Phaser3 Game</span>
      <span>Back</span>
    </div>
  )
}

export default Footer
