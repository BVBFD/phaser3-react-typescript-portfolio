import React from 'react';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <div className={styles.headerBox}>
      <span
        style={{ cursor: 'pointer' }}
        onClick={() => {
          window.location.replace('/');
        }}
      >
        Home
      </span>
      <span>Phaser3 Game</span>
      <img src='../imgs/phaserLogo.png' alt='' />
    </div>
  );
};

export default Header;
