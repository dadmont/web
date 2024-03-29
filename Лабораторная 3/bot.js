const TelegramBot = require("node-telegram-bot-api");
const token = "7053696112:AAG7EycaMgaXjddZ5C48g6jrrV2lBwTq0rw";

const bot = new TelegramBot(token, {
    polling: {
        interval: 300,
        autoStart: true
    },
});

bot.on("polling_error", err => console.log(err.message.toString()));
bot.on('text', async msg => {
    if (msg.text == "/start")
    {
        await bot.sendMessage(msg.chat.id, "Вы запустили бота");
        
    }
    else{
        let json = `{
    message_id: ${msg.message_id},
    from: {
        id: ${msg.from.id},
        first_name: ${msg.from.first_name},
        username: ${msg.from.username},
        language_code: ${msg.from.language_code}
        },
    chat: {
        id: ${msg.chat.id},
        first_name: ${msg.chat.first_name},
        username: ${msg.chat.username},
        type: ${msg.chat.type}
        },
    
    text: ${msg.text}
}`
        await bot.sendMessage(msg.chat.id, `Вот json твоего сообщения: \n ${json}`);
    }
});