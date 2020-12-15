import Button from '../button/button';

export default class Menu extends Phaser.Scene {
  constructor () {
    super('Menu');
  }

  create() {
    this.add.image(100, 100, 'Aurora');
    this.button = new Button(this, 200, 200, 'btn1', 'btn2', 'Play', 'Game');
  }
}