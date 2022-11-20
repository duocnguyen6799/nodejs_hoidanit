
import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config();

// const path = require('path');
const res = require('express/lib/response');

const app = express();
const port = process.env.PORT || 3000;
console.log('>>> check port: ', port);

configViewEngine(app);

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, './index.html'));
    res.render('./index.ejs'); //Auto find the file any in views folder. config in viewEngine
});

app.get('/about', (req, res) => {
    res.send(`This is an about page`)
})

app.listen(port, () => {
    console.log(`App listening at https://localhost:${port}`);
})