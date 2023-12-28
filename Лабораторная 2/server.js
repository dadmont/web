const express = require('express'); // импорт модуля express
const app = express(); // создание приложения

app.use(express.static(`${__dirname}/public`)); // зафиксировали папку public, чтобы html страница могла подхватить script.js

app.get('/', (req, resp) => { 
    resp.sendFile(`${__dirname}/public/index.html`); // при открытии страницыы отправляем html страницу
});

app.listen(3000, ()=>{
    console.log('Server online'); // запуск сервера на порте 3000
});