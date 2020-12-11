import nature from '../assets/nature.png';

export default class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('nature', nature);
  }

  create() {
    this.scene.start('Preloader');
  }
}