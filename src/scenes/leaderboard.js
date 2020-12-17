/* eslint-disable no-undef */
import { getScore } from '../retrieveLeaderBoard';
import Button from '../button/button';

export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  preload() {
    this.myCanvas = this.sys.game.canvas;
  }

  create() {
    if (document.getElementById('error-div')) {
      document.body.removeChild(document.getElementById('error-div'));
    }
    const { width } = this.myCanvas;
    this.add.text(100, 100, 'LEADERBOARD PLAYERS', { boundsAlignH: 'center' });
    getScore().then((data) => {
      const score = data.result.sort((a, b) => b.score - a.score);
      let y = 200;
      for (let i = 0; i < score.length; i += 1) {
        if (i > 10) { break; }
        this.add.text(100, y, `${score[i].user} ----- ${score[i].score}`);
        y += 50;
      }
    });
    const menu = new Button(this, (width / 2) + 100, 100, 'btn1', 'btn2', 'Menu', 'Menu');
    menu.scale = 0.2;
  }
}