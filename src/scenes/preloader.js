import Aurora from '../assets/aurora.png';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.load.image('Aurora', Aurora);
    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
  }

  create() {
    this.add.image(400, 200, 'nature');
    this.add.text(100, 100, 'Aurora The Adventurer', { fontFamily: 'Georgia, serif', fill: '#0f0' });
    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
  }

  ready() {
    this.scene.start('Menu');
  }
};