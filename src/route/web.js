import express from 'express';
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', (req, res) => homeController.getHomeRoute)
    router.get('/about', (req, res) => {
        res.send('This is about page!')
    })
    return app.use('/', router)
}

export default initWebRoute;