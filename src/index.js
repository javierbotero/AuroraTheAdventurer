import 'phaser';
import Boot from './scenes/boot';
import Preloader from './scenes/preloader';
import Menu from './scenes/title';
import Game from './scenes/game';
import './assets/style.scss';
import Data from './data';

const parent = document.createElement('div');
parent.setAttribute('id', 'parentId');
parent.classList = 'parent';

const config = {
  type: Phaser.AUTO,
  parent: 'parentId',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
  },
};

class TheAdventurer extends Phaser.Game {
  constructor() {
    super(config);
    const myData = new Data();
    this.globals = { myData };
    this.scene.add('Boot', Boot);
    this.scene.add('Preloader', Preloader);
    this.scene.add('Menu', Menu);
    this.scene.add('Game', Game);
    this.scene.start('Boot');
  }
}

const game = new TheAdventurer();
document.body.appendChild(parent);