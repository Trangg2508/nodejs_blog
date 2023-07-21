
// 'express' is libary, expressjs is framework
const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require("express-handlebars"); 
const path = require("path");

//handle static file
//the path: E:\Nodejs\Blog\sr\public
//we save static file in that route so we have to use below code into that path
app.use(express.static(path.join(__dirname, "public")))


//middleware is already in express, call to use
//urlencoded() send data to server by form
//json() send data to server by fetch, axios, ...
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//Template engine
//extname: dùng để đổi đuôi mở rộng của các file .handlebars -> rút gọn thành .hps (muốn đổi là gì cũng được)
app.engine(".hbs", handlebars.engine({
  extname: '.hbs'
})); 
app.set("view engine", ".hbs");

//the path: E:\Nodejs\Blog\sr\resources\views
app.set("views", path.join(__dirname, "resources", "views"));



// console.log('__dirname is:', __dirname);
//result: __dirname is: E:\Nodejs\Blog\src

//page 'home' has route is '/'
app.get('/', (req, res) => {
     res.render('home');
});

app.get('/search', (req, res) => {
  console.log(req.query);
  res.render('search');
});

app.post('/search', (req, res) => {
  //get- query parameter -> req.query
  //post- form data -> req.body
  console.log(req.body);
  res.send('');
});

app.get('/news', (req, res) => {
  res.render('news');
});

//IP adress: 127.0.0.1 -> localhost
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

