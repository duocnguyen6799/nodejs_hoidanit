
import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import connection from './configs/connectDB';

require('dotenv').config();

// const path = require('path');
const res = require('express/lib/response');

const app = express();
const port = process.env.PORT || 3000;
console.log('>>> check port: ', port);

configViewEngine(app);
initWebRoute(app);

app.listen(port, () => {
    console.log(`App listening at https://localhost:${port}`);
})