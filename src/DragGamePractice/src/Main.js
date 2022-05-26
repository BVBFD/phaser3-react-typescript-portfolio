import Phaser from 'phaser'
import Game from './scenes/Game.js'
import GameOver from './scenes/GameOver.js'

export const config = {
  type: Phaser.AUTO,
  width: 900,
  height: 500,
  scene: [Game, GameOver],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {},
    },
  },
}

// export default new Phaser.Game(config)
