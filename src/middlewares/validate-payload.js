const { validationResult } = require('express-validator/check');

const validationError = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next({ status: 422, message: errors.array() });
  }

  next();
};

const validate = (...checks) => [...checks, validationError];
module.exports = validate;
