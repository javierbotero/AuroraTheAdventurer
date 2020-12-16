import { getScore } from '../retrieveLeaderBoard';

export default class LeaderBoard extends Phaser.Scene {
  constructor() {
    super('LeaderBoard');
  }

  create() {
    this.add.text(100, 100, 'LEADERBOARD PLAYERS', { boundsAlignH: 'center' });
    getScore().then(data => {
      const score = data.result.sort((a, b) => b.score - a.score);
      // Iterate over myScore and print untill the first 8 elements
      // break if element does not exists
      let y = 200;
      for (let i = 0; i < score.length; i += 1) {
        if (i > 10) { break; }
        this.add.text(100, y, `${score[i].user} ----- ${score[i].score}`);
        y += 50;
      }
    });
  }
}