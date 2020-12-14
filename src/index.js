import 'phaser';
import Boot from './scenes/boot';
import Preloader from './scenes/preloader';
import Menu from './scenes/title';
import Game from './scenes/game';

const config = {
  type: Phaser.AUTO,
  parent: 'Parent',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
};

class TheAdventurer extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', Boot);
    this.scene.add('Preloader', Preloader);
    this.scene.add('Menu', Menu);
    this.scene.add('Game', Game);
    this.scene.start('Boot');
  }
}

const game = new TheAdventurer();