const postScore = async (username, score, cbfetch, url) => {
  const data = {
    user: username,
    score,
  };

  const init = {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const retrieve = await cbfetch(url, init)
    .then((data) => data.json())
    .catch(err => err);

  return retrieve;
};

const getScore = async (cbfetch, url) => {
  const retrieve = await cbfetch(url)
    .then((data) => data.json())
    .catch(err => err);

  return retrieve;
};

export { postScore, getScore };