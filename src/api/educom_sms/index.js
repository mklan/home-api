const sendText = require('educom-sms');

const sendEducomSMS = ({ user, password }) => async (req, res) => {
  const { recipient, text } = req.body;

  try {
    await sendText({
      user,
      password,
      recipient,
      text,
    });
  } catch (e) {
    return res.status(500).json({ errors: ['error sending sms', e.message] });
  }

  res.send('sms sent!');
};

module.exports = {
  sendEducomSMS,
};
