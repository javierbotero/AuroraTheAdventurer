import Button from '../button/button';
import Trees from '../assets/map/spritesheet.png';
import MyMap from '../assets/map/map.json';
import MyCharacter from '../assets/RPG_assets.png';

export default class Menu extends Phaser.Scene {
  constructor () {
    super('Menu');
  }

  preload() {
    this.load.image('trees', Trees);
    this.load.tilemapTiledJSON('map', MyMap);
    this.load.spritesheet('character', MyCharacter, { frameWidth: 16, frameHeight: 16 });
  }

  create() {
    console.log('create');
    this.add.image(100, 100, 'Aurora');
    console.log('create after add image Aurora');
    this.button = new Button(this, 200, 200, 'btn1', 'btn2', 'Play', 'Game');
  }
}