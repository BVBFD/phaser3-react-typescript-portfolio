import React from 'react'
// import RocketMouse from '../../RocketMouse/Main'
import { config } from '../../RocketMouse/Main'
import { IonPhaser } from '@ion-phaser/react'
import styles from './RocketMousePage.module.css'

const RocketMousePage = (props) => {
  return (
    <div className={styles.IonPhaserBox}>
      <IonPhaser game={config} initialize={true} />
    </div>
  )
}

export default RocketMousePage
