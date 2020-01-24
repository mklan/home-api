const users = require('config').get('users');

const auth = (req, res, next) => {
  const apikey = req.query.apikey || req.body.apikey;
  console.log(req.body);
  console.log(apikey);
  const user = users[apikey];
  console.log(users);
  if (!user) {
    return res
      .status(401)
      .send({ success: false, message: 'authentication failed' });
  }

  res.locals.user = user;
  next();
};

module.exports = auth;
