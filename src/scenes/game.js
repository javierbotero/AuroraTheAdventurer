export default class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create () {
    const map = this.make.tilemap({ key: 'map' });
    console.log(map);
    const tiles = map.addTilesetImage('spritesheet', 'trees');
    const grass = map.createStaticLayer('Grass', tiles, 0, 0);
    const obstacles = map.createStaticLayer('Obstacles', tiles, 0, 0);
    obstacles.setCollisionByExclusion([-1]);
    console.log(this);
    this.player = this.physics.add.sprite(50, 100, 'character', 6);
    this.physics.world.bounds.width = map.widthInPixels;
  }
}