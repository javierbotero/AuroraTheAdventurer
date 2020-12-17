import Boot from './boot';
import 'phaser';

it('Check that the instance of the class inherits from Boot', () => {
  const boot = new Boot();
  expect(typeof boot).toBe('Boot');
});