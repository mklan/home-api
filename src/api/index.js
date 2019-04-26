const { Router } = require('express');
const { check } = require('express-validator/check');
const { y2mp4 } = require('./youtube_dl');
const { sendEducomSMS } = require('./educom_sms');
const config = require('config');

const validationError = require('../middlewares/validationError');

const router = Router();

router.get('/y2mp4', check('id').isString(), validationError, y2mp4({
  destination: config.get('modules.youtube_dl.video_destination')
}));

router.get('/sms', check('text').isString(), check('recipient').isString(), validationError, sendEducomSMS({
  user: config.get('modules.educom_sms.user'),
  password: config.get('modules.educom_sms.password'),
}));


// TODO:
// router.get('/y2mp3', y2mp3({
//   destination: '/music'
// }));

module.exports = router;