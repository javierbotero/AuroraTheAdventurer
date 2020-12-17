module.exports = {
  verbose: true,
  testEnvironment: 'jest-environment-node',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};