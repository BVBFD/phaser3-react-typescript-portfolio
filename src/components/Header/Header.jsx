import React from 'react'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
  const navigate = useNavigate()
  return (
    <div className={styles.headerBox}>
      <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        Home
      </span>
      <span>Phaser3 Game</span>
      <img src="../imgs/phaserLogo.png" alt="" />
    </div>
  )
}

export default Header
