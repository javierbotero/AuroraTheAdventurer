export default class Menu extends Phaser.Scene {
  constructor () {
    super('Menu');
  }

  preload() {
    // load game assets
  }

  create() {
    this.add.image(100, 100, 'Aurora');
  }
}