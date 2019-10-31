const TelegramBot = require('node-telegram-bot-api'); //Telegram bot library for node-js
const token = ''; //token of the bot from @botfather
const bot = new TelegramBot(token, {polling:true}); //run our bot on local
const request = require('request');

bot.onText(/\/start/, (msg) => {
    
bot.sendMessage(msg.chat.id, "What u want?", {
"reply_markup": {
    "keyboard": [["/weather", "Location"], ["/start"]]
    }
});
    
});

//Chat with bot
bot.onText(/\/echo (.+)/,function(msg,match){
    const chatId = msg.chat.id;
    const echo = match[1];
    bot.sendMessage(chatId,echo);
});
