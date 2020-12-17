/* eslint-disable no-undef */
import Aurora from '../assets/aurora.png';
import 'phaser';

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