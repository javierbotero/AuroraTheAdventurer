/* eslint-disable no-undef */
import Aurora from '../assets/aurora.png';

export default class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('Aurora', Aurora);
  }

  create() {
    this.scene.start('Preloader');
  }
}