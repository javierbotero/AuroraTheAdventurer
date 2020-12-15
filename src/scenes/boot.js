import Aurora from '../assets/aurora.png';

export default class Boot extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('nature', Aurora);
  }

  create() {
    this.scene.start('Preloader');
  }
}