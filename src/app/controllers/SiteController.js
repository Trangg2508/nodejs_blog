class NewsController {
    // method: [GET], access route '/'
    index(req, res) {
        res.render('home');
    }

    // [GET], route: /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new NewsController();
