import 'phaser';
import { Boot } from './scenes/boot';

const config = {
  width: 800,
  height: 600,
  scene: Boot,
}

new Phaser.Game(config);