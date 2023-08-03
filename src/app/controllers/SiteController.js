const Course = require('../models/Course');

class SiteController {
    // method: [GET], access route '/'
    index(req, res) {
        Course.find().then((courses, err) => {
            res.json(courses);
        }).catch(() => { 
            res.status(400).json({ error: 'ERROR!!!' }) 
        });

        // res.render('home');
    }

    // [GET], route: /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
