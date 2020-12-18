import Game from './game';

it('Make sure game has the property config pointing to the string Game', () => {
  const game = new Game();
  expect(game.sys.config).toBe('Game');
});

it('Make sure game has the function removeGarbage', () => {
  const game = new Game();
  expect(game.sys.settings.key).toBe('Game');
});