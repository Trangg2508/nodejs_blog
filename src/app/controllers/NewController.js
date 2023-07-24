class NewsController {
    // method: [GET], access route '/news'
    index(req, res) {
        res.render('news');
    }

    // [GET], route: /news/:slug
    show(req, res) {
        res.send('NEWS DETAIL!!!!');
    }
}

module.exports = new NewsController();
