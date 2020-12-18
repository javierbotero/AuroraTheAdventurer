import Boot from './boot';

it('Check that the instance of the class inherits from Boot', () => {
  const boot = new Boot();
  expect(boot.sys.config).toBe('Boot');
});

it('Make sure Boot uses the scene with key Boot', () => {
  const boot = new Boot();
  expect(boot.sys.settings.key).toBe('Boot');
});