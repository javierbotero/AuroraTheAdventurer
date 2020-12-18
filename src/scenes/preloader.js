import Aurora from '../assets/aurora.png';
import Btn1 from '../assets/btn1.png';
import Btn2 from '../assets/btn2.png';
import MyCharacter from '../assets/girl2.png';
import Grass from '../assets/map/grass.png';
import Trees from '../assets/map/tree.png';
import Hut from '../assets/map/hut.png';
import MyMap from '../assets/map/jungle2.json';
import Garbage from '../assets/map/garbage.png';
import Robot from '../assets/robot.png';
import Arrow1 from '../assets/arrow1.png';
import Arrow2 from '../assets/arrow2.png';

// eslint-disable-next-line no-undef
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
    this.load.image('Hut', Hut);
    this.load.tilemapTiledJSON('map', MyMap);
    this.myCanvas = this.sys.game.canvas;
    this.load.image('robot', Robot);
    this.load.image('arrow1', Arrow1);
    this.load.image('arrow2', Arrow2);
  }

  create() {
    const { width, height } = this.myCanvas;
    this.add.image(400, 200, 'Aurora');
    const title = this.add.text(width / 2, height / 2 + 100, 'Aurora the Adventurer', { fontFamily: 'Georgia, serif', fontSize: 60 });
    title.style.fontSize = 100;
    title.setOrigin(title.halfWidth, title.halfHeight);
  }

  ready() {
    this.scene.start('Menu');
  }
}