const { Router } = require('express');
const { check } = require('express-validator/check');
const config = require('config');

// middlewares
const auth = require('../middlewares/auth');
const validate = require('../middlewares/validate-payload');

// modules
const { y2mp4 } = require('./youtube_dl');
const { sendEducomSMS } = require('./educom_sms');

const router = Router();

router.post(
  '/y2mp4',
  auth,
  validate(check('id').isString()),
  y2mp4({
    destination: config.get('modules.youtube_dl.video_destination'),
  }),
);

router.post(
  '/sms',
  auth,
  validate(check('text').isString(), check('recipient').isString()),
  sendEducomSMS({
    user: config.get('modules.educom_sms.user'),
    password: config.get('modules.educom_sms.password'),
  }),
);

// TODO:
// router.get('/y2mp3', y2mp3({
//   destination: '/music'
// }));

module.exports = router;
