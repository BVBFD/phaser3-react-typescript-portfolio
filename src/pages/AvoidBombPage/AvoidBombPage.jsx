import React from 'react'
// import AvoidBomb from '../../AvoidBomb/Main'
import { IonPhaser } from '@ion-phaser/react'
import { config } from '../../AvoidBomb/Main'
import styles from './AvoidBombPage.module.css'

const AvoidBombPage = (props) => {
  console.log(config)
  return (
    <div className={styles.IonPhaserBox}>
      <IonPhaser game={config} initialize={true} />
    </div>
  )
}

export default AvoidBombPage
