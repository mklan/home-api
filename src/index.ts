require('dotenv').config();

const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./api');

const runYoutubeDlBot = require('./bots/telegram/youtube-dl');

const app = express();
const port = config.has('port') ? config.get('port') : 3000;

function errorHandler(err, req, res, next) {
  res
    .status(err.status || 500)
    .send({ success: false, error: err.message || 'Server error!' });
}

app.use(bodyParser.json());
app.use('/', router);
app.use(errorHandler);

app.listen(port, function() {
  console.log(`HomeApi listening on port ${port}!`);
});

// start bots

const getApiKeyByUsername = username =>
  Object.entries(config.get('users')).find(
    ([apiKey, user]: [String, any]) => user.username === username,
  );

const [apikey] = getApiKeyByUsername('matze');

runYoutubeDlBot({
  telegramApiKey: config.get('bots.youtube_dl.apikey'),
  homeApihost: `http://localhost:${port}`,
  homeApiKey: apikey,
});
