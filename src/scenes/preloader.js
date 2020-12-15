import Aurora from '../assets/aurora.png';
import Btn1 from '../assets/btn1.png';
import Btn2 from '../assets/btn2.png';
import MyCharacter from '../assets/girl2.png';
import Grass from '../assets/map/grass.png';
import Trees from '../assets/map/tree.png';
import MyMap from '../assets/map/jungle2.json';
import Garbage from '../assets/map/garbage.png';

export default class Preloader extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.load.image('Aurora', Aurora);
    this.load.image('btn1', Btn1);
    this.load.image('btn2', Btn2);
    this.time.delayedCall(3000, this.ready, [], this);
    this.load.spritesheet('character', MyCharacter, { frameWidth: 41, frameHeight: 43 });
    this.load.image('Trees', Trees);
    this.load.image('Grass', Grass);
    this.load.image('Garbage', Garbage);
    this.load.tilemapTiledJSON('map', MyMap);
  }

  create() {
    this.add.image(400, 200, 'nature');
    this.add.text(100, 100, 'Aurora The Adventurer', { fontFamily: 'Georgia, serif', fill: '#0f0' });
  }

  ready() {
    this.scene.start('Menu');
  }
};