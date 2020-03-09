const users = require('config').get('users');

const auth = (req, res, next) => {
  const apikey = req.query.apikey || req.body.apikey;
  const user = users[apikey];
  if (!user) {
    return next({ status: 401, message: 'authentication failed' });
  }

  res.locals.user = user;
  next();
};

module.exports = auth;
