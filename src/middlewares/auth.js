const auth = (req, res, next) => {

  const { apikey } = req.query;
  if(apikey !== process.env.API_KEY) {
    return res.send(401,{ success : false, message : 'authentication failed' });
  }

  next();
}

module.exports = auth;
