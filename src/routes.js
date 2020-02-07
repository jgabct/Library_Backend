const { Router } = require('express');
const BookController = require('./controllers/BookController');

const routes = Router();

routes.get('/book', BookController.index);
routes.post('/book', BookController.store);

module.exports = routes;