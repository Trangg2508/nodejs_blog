const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewController');

//**Note: the route '/' have to put the bottom of all

// newsController.index

// after we  access the path '/news', current path: http://localhost:3000/news/:slug , handle logic in show() in NewController.js
//** /:slug mean you can input anything, it still access to handle in show()
router.use('/:slug', newsController.show);

//after we already access the path '/news' which have path: http://localhost:3000/news/ , handle logic in index() in NewController.js
router.use('/', newsController.index);

module.exports = router;
