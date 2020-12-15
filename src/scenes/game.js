export default class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  removeGarbage(player, can) {
    can.destroy(can.x, can.y);
  }

  create () {
    const map = this.make.tilemap({ key: 'map' });
    const trees = map.addTilesetImage('delimiter1', 'Trees');
    const grass = map.addTilesetImage('nature', 'Grass');
    const cans = map.getObjectLayer('cans')['objects'];
    const grassLayer = map.createStaticLayer('grass', grass, 0, 0);
    const treesLayer = map.createStaticLayer('trees', trees, 0, 0);
    const garbage = this.physics.add.staticGroup();
    cans.forEach((can) => {
      const object = garbage.create(can.x, can.y, 'Garbage');
      // object.setScale(can.width / 16, can.height / 16);
      object.setOffset(50, 50);
      object.setOrigin(0);
      object.body.width = can.width;
      object.body.height = can.height;
    });
    treesLayer.setCollisionByProperty({ collides: true });
    console.log(this);
    console.log(map);
    this.player = this.physics.add.sprite(200, 100, 'character', 0);
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, treesLayer);
    this.physics.add.overlap(this.player, garbage, this.removeGarbage, null, this);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;
    let text = this.add.text(100, 100, `Score: ${this.sys.game.globals.myData.score}`, { fontSize: '20px', fill: '#ffffff' });
    text.setScrollFactor(0);
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('character', { frames: [4, 5, 6, 7] }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('character', { frames: [8, 9, 10, 11] }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('character', { frames: [12, 13, 14, 15] }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('character', { frames: [0, 1, 2, 3] }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update(time, delta) {
    this.player.body.setVelocity(0);
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-100);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(100);
      this.player.anims.play('right', true);
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-100);
      this.player.anims.play('up', true);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocity(100);
      this.player.anims.play('down', true);
    } else {
      this.player.anims.stop();
    }
  }
}