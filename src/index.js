require('dotenv').config();

const config = require('config');
const express = require('express');
const { check } = require('express-validator/check');

const auth = require('./middlewares/auth');
const validationError = require('./middlewares/validationError');
const router = require('./api');

const app = express();
const port = config.get('port');

app.use(check('apikey').isString());
app.use(validationError);
app.use(auth);

app.use('/', router);

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});