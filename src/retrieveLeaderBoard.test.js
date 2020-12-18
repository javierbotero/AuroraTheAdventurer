import { postScore, getScore } from './retrieveLeaderBoard';

describe('Api retrive data', () => {
  it('Postscore calls fakeFetch once', () => {
    const fakeFetch = jest.fn(() => Promise.resolve(''));
    postScore('Jhon', 10, fakeFetch, 'https://fakeurl.com');
    expect(fakeFetch.mock.calls.length).toBe(1);
  });

  it('GetScore takes fakeFetch callbak and calls that method with the second parameter wich is a url', () => {
    const fakeFetch = jest.fn(() => Promise.resolve(''));
    getScore(fakeFetch, 'https://fakeurl.com');
    expect(fakeFetch.mock.calls[0][0]).toBe('https://fakeurl.com');
  });
});