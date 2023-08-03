//file index.js in folder route manages routes

const newsRouter = require('./news.route');
const sitesRouter = require('./sites.route');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/blog', sitesRouter);

    //*** Example for post method
    // app.post('/search', (req, res) => {
    //     //get- query parameter -> req.query
    //     //post- form data -> req.body
    //     console.log(req.body);
    //     res.send('');
    // });
}

module.exports = route;
