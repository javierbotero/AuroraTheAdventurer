import Data from './data';

it('expect object from data class', () => {
  const data = new Data();
  expect(typeof data).toBe('object');
});

it('expect data to have property score', () => {
  const data = new Data();
  expect(data.score).toBe(0);
});

it('expect data to have property sounds', () => {
  const data = new Data();
  expect(data.sounds).toBe(true);
});


it('expect data to have text score equal to Score: 0', () => {
  const data = new Data();
  expect(data.textScore).toBe('Score: 0');
});

it('expect data to have text score equal to Score: 0', () => {
  const data = new Data();
  expect(typeof data.leaderBoard).toBe('object');
});