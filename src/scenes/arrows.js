export default class Arrow extends Phaser.GameObjects.Container {
  constructor(scene, x, y, key) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    
    this.add(this.button);
    this.scene.add.existing(this.button);

    this.button.on('pointerdown', () => {
      this.scene.player.body.setVelocityX(-200);
      this.scene.player.anims.play('left', true);
      this.leftArrow.setTint(0xFFFF00);
      console.log('arrow is press');
    });
  }
}