// 'express' is libary, expressjs is framework
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

//require('./routes') is accessing folder routes
const route = require('./routes');

const db = require('./config/db');

//Connect to DB
db.connect();

//handle static file
//the path: E:\Nodejs\Blog\sr\public
//we save static file in that route so we have to use below code into that path
app.use(express.static(path.join(__dirname, 'public')));

//middleware is already in express, call to use
//urlencoded() send data to server by form
//json() send data to server by fetch, axios, ...
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//Template engine
//extname: dùng để đổi đuôi mở rộng của các file .handlebars -> rút gọn thành .hps (muốn đổi là gì cũng được)
app.engine(
    '.hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');

//the path: E:\Nodejs\Blog\sr\resources\views
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

//IP adress: 127.0.0.1 -> localhost
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
