import 'phaser';
import Boot from './scenes/boot';
import Preloader from './scenes/preloader';
import Menu from './scenes/title';

const config = {
  type: Phaser.AUTO,
  parent: 'Parent',
  width: 800,
  height: 600,
};

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', Boot);
    this.scene.add('Preloader', Preloader);
    this.scene.add('Menu', Menu);
    this.scene.start('Preloader');
  }
}

const game = new Game();