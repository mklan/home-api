const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

function run({ telegramApiKey, homeApihost, homeApiKey }) {
  const bot = new TelegramBot(telegramApiKey, { polling: true });

  // Matches "https://youtu.be/[id]"
  bot.onText(/https:\/\/youtu.be\/(.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const ytId = match[1];

    console.log(homeApiKey);

    try {
      await axios.post(`${homeApihost}/y2mp4`, {
        apikey: homeApiKey,
        id: ytId,
      });
      bot.sendMessage(chatId, 'youtube video archived!');
    } catch (e) {
      bot.sendMessage(chatId, `failed to archive! ${e.message}`);
    }
  });
}

module.exports = run;
