const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

// Cache MiddleWare Repos
function cache(req, res, next) {
  const { username } = req.params;

  client.get(username, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      res.send(setReponse(username, data));
    } else {
      next();
    }
  });
}

// Cache MiddleWare Operations
function cacheOperations(req, res, next) {
  const { projectIdentifier } = req.params;

  client.get(projectIdentifier, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      res.send(setReponseOperations(projectIdentifier, data));
    } else {
      next();
    }
  });
}

app.get(
  '/operations/:projectIdentifier',
  cacheOperations,
  getOperations,
);

app.get('/repos/:username', cache, getRepositories);

// Make request
// Redis Cache
async function getOperations(req, res, next) {
  try {
    console.log('Fetching Data...');

    const { projectIdentifier } = req.params;

    // var headers = {}
    //headers['This-Api-Header-Custom'] = {
    var headers = {
      Authorization: 'cs_ByPass_For_ReporUiViaUserName',
      reportUiUserName: 'osvaldo.martini@gmail.com',
    };

    const response = await fetch(
      `http://localhost:9095/api/operations/${projectIdentifier}`,
      { method: 'GET', headers: headers },
    );

    const data = await response.json();

    console.log(data);
    //const repos = data.public_repos;

    // Set data to Redis
    // Key , Expiration,  Value(Data)
    client.setex(projectIdentifier, 3600, data[0][0]);

    res.send(setReponseOperations(projectIdentifier, data));
  } catch (err) {
    console.log(err);
  }
}

function setReponseOperations(projectIdentifier, data) {
  return `<h2>${projectIdentifier} has ${data} as operation</h2>`;
}

// Set Response
function setReponse(username, repos) {
  return `<h2>${username} has ${repos} Github repos</h2>`;
}

// Make request
async function getRepositories(req, res, next) {
  try {
    console.log('Fetching Data...');

    const { username } = req.params;

    //const response = await fetch(`https://api.github.com/users/${username}`);
    const response = await fetch(
      `https://api.github.com/users/${username}`,
    );

    const data = await response.json();

    const repos = data.public_repos;

    // Set data to Redis
    // Key , Expiration,  Value(Data)
    client.setex(username, 3600, repos);

    res.send(setReponse(username, repos));
  } catch (err) {
    console.log(err);
  }
}

app.listen(5000, () => {
  console.log(`App listening on port ${PORT}`);
});
