import React from 'react';
// import DragGamePractice from '../../DragGamePractice/src/Main'
import { config } from '../../DragGamePractice/src/Main';
import { IonPhaser } from '@ion-phaser/react';
import styles from './DragGamePracticePage.module.css';

const DragGamePracticePage = (props) => {
  return (
    <div className={styles.IonPhaserBox}>
      <IonPhaser game={config} initialize={true} />
    </div>
  );
};

export default DragGamePracticePage;
