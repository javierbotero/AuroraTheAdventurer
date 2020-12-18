/* eslint-disable no-undef */
import { postScore } from '../retrieveLeaderBoard';
import Arrow from './arrows';

const fetch = require('node-fetch');

export default class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.myCanvas = this.sys.game.canvas;
  }

  removeGarbage(player, can) {
    can.destroy(can.x, can.y);
    this.myScore += 1;
    this.myText.setText(`Score: ${this.myScore}`);
  }

  create() {
    this.myScore = 0;
    const map = this.make.tilemap({ key: 'map' });
    const trees = map.addTilesetImage('delimiter1', 'Trees');
    const grass = map.addTilesetImage('nature', 'Grass');
    const hut = map.addTilesetImage('hut', 'Hut');
    const cans = map.getObjectLayer('cans').objects;
    const endGame = map.getObjectLayer('endGame').objects;
    map.createStaticLayer('grass', grass, 0, 0);
    const treesLayer = map.createStaticLayer('trees', trees, 0, 0);
    map.createStaticLayer('Hut', hut, 0, 0);
    const endPoints = this.physics.add.staticGroup();
    endGame.forEach((point) => {
      const p = endPoints.create(point.x, point.y).setOrigin(0);
      p.body.width = point.width;
      p.body.height = point.height;
    });
    const garbage = this.physics.add.staticGroup();
    cans.forEach((can) => {
      const object = garbage.create(can.x, can.y, 'Garbage');
      object.setOffset(50, 50);
      object.setOrigin(0);
      object.body.width = can.width;
      object.body.height = can.height;
    });
    treesLayer.setCollisionByProperty({ collides: true });
    this.player = this.physics.add.sprite(200, 100, 'character', 0);
    this.myRobots = this.physics.add.group();
    this.physics.add.collider(this.player, this.myRobots, this.hitRobot, null, this);
    this.physics.add.collider(this.myRobots, this.myRobots);
    this.physics.world.bounds.width = map.widthInPixels;
    this.physics.world.bounds.height = map.heightInPixels;
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, treesLayer);
    this.physics.add.collider(this.myRobots, treesLayer);
    this.physics.add.overlap(this.player, garbage, this.removeGarbage, null, this);
    this.physics.add.overlap(this.player, endPoints, this.gameWin, null, this);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.player);
    this.cameras.main.roundPixels = true;
    this.myText = this.add.text(100, 100, this.sys.game.globals.myData.textScore, { fontSize: '20px', fill: '#ffffff' });
    this.myText.setScrollFactor(0);
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
    this.time.addEvent({
      delay: 1000 * 60 * 5,
      callback: this.gameOver,
      callbackScope: this,
    });
    this.myInterval = setInterval(() => { this.releaseRobot(this.player); }, 3000);
    const { width, height } = this.myCanvas;
    this.arrowLeft = this.physics.add.sprite(width / 2, height - 100, 'arrow1').setInteractive();
    console.log(this.arrowLeft);
  }

  update() {
    this.player.body.setVelocity(0);
    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-200);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(200);
      this.player.anims.play('right', true);
    } else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-200);
      this.player.anims.play('up', true);
    } else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(200);
      this.player.anims.play('down', true);
    } else {
      this.player.anims.stop();
    }
    if(this.arrowLeft.isDown) {
      this.arrowLeft.setTexture('arrow2');
      this.player.body.setVelocityX(-200);
      this.player.anims.play('left', true);
    }
    // this.arrowLeft.on('pointerover', () => {
    //   this.arrowLeft.setTexture('arrow2');
    //   this.player.body.setVelocityX(-200);
    //   this.player.anims.play('left', true);
    // });
  }

  async gameOver() {
    clearInterval(this.myInterval);
    const name = localStorage.getItem('username');
    if (this.myScore > 0) {
      try {
        if (!localStorage.getItem('bestScore')) {
          localStorage.setItem('bestScore', this.myScore);
          await postScore(name, this.myScore, fetch, this.sys.game.globals.myData.url);
        } else if (this.myScore > localStorage.getItem('bestScore')) {
          localStorage.setItem('bestScore', this.myScore);
          await postScore(name, this.myScore, fetch, this.sys.game.globals.myData.url);
        }
      } catch (error) {
        const errorDiv = document.createElement('div');
        errorDiv.setAttribute('id', 'error-div');
        errorDiv.innerHTML = 'We experienced some error saving your score';
        document.body.appendChild(errorDiv);
      }
    }
    this.scene.start('LeaderBoard');
  }

  gameWin() {
    this.myScore += 100;
    this.gameOver();
  }

  hitRobot(player, robot) {
    this.physics.pause();
    player.setTint(0x0000ff);
    robot.setTint(0x0000ff);
    player.anims.play('down');
    this.gameOver();
  }

  releaseRobot(player) {
    const x = Phaser.Math.Between(player.x + 100, player.x + 200);
    const y = Phaser.Math.Between(player.y + 100, player.y + 200);
    const robot = this.myRobots.create(x, y, 'robot');
    robot.setCollideWorldBounds(true);
    robot.setVelocity(Phaser.Math.Between(-100, 100), 100);
    robot.body.bounce.set(1);
  }
}