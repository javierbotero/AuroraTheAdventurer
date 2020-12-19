export default class Data {
  constructor() {
    this.score = 0;
    this.sounds = true;
    this.textScore = `Score: ${this.score}`;
    this.leaderBoard = {};
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gwdRk8EblwcUzHRd5oAK/scores/';
  }
}