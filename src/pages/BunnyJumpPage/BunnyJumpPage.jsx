import React from 'react'
// import BunnyJump from '../../BunnyJump/src/Main'
import { IonPhaser } from '@ion-phaser/react'
import { config } from '../../BunnyJump/src/Main'
import styles from './BunnyJumpPage.module.css'

const BunnyJumpPage = (props) => {
  return (
    <div className={styles.IonPhaserBox}>
      <IonPhaser game={config} initialize={true} />
    </div>
  )
}

export default BunnyJumpPage
