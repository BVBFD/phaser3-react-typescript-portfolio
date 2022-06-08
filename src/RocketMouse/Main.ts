import Phaser from 'phaser'

import Game2 from './scenes/Game'
import Preloader2 from './scenes/Preloader'
import GameOver2 from './scenes/GameOver'

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 900,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
      debug: true,
    },
  },
  scene: [Preloader2, Game2, GameOver2],
}
