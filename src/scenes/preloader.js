import Aurora from '../assets/aurora.png';
import Btn1 from '../assets/btn1.png';
import Btn2 from '../assets/btn2.png';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.load.image('Aurora', Aurora);
    this.load.image('btn1', Btn1);
    this.load.image('btn2', Btn2);
    this.time.delayedCall(3000, this.ready, [], this);
  }

  create() {
    this.add.image(400, 200, 'nature');
    this.add.text(100, 100, 'Aurora The Adventurer', { fontFamily: 'Georgia, serif', fill: '#0f0' });
  }

  ready() {
    this.scene.start('Menu');
  }
};