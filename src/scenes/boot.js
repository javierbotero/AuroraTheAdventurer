import nature from '../assets/nature.png'

export class Boot extends Phaser.Scene {
  preload () {
    this.load.image('nature', nature);
  }
  create() {
    this.add.text(100, 100, 'Hello Phaser', { fill: '#0f0' });
    this.add.image(400, 200, 'nature');
  }
}