import { getScore } from '../retrieveLeaderBoard';

export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    this.myBoard = getScore();
    console.log(this.myBoard);
    this.add.text(100, 100, 'LEADERBOARD SCENE');
  }
}