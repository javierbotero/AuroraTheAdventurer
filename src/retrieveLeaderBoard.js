const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TXevdkyj2AGHb2tBY35Y/scores/';

const postScore = async (user, score) => {
  const data = {
    user,
    score,
  };

  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const retrieve = await fetch(url, init)
    .then((data) => data.json())
    .catch(err => err);

  return retrieve;
};

const getScore = async () => {
  const retrieve = await fetch(url)
    .then(data => data.json())
    .catch(err => err);

  return retrieve;
};

export { postScore, getScore };