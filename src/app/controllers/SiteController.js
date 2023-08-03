const Course = require('../models/Course');

class SiteController {
    // method: [GET], access route '/'
    // index(req, res, next) {
    //     Course.find({})
    //         .then(courses => res.render('home'), {
    //             title: 'LIST',
    //             courses
    //         })
    //         .catch(next)

        
    // }
    index(req,res,next){ 
        Course.find({}) .lean() 
        .then( courses => {res.render('home',{
            title: 'LIST COURSES',
            courses: courses
        }) }) 
        .catch(next) }

    // [GET], route: /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
