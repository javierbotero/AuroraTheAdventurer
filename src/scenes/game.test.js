import Game from './game';
import 'babel-polyfill';

it('Check a can is destroy in removeGarbage', () => {
  const game = new Game();
  const can = {
    x: 10,
    y: 10,
    destroy: jest.fn(),
  };
  game.removeGarbage(null, can);
  expect(can.destroy.calls.length).toBe(1);
});