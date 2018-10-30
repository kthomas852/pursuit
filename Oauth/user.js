//This is the same as the route js for my other projects
var router = require('express-promise-router')();

router.route('/oauth/google')
    .post(passport.authenticate('googleToken', {session: false}));
//You can postman at this point and should work
//Should be sending access token