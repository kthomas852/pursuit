//Oauth code as displayed from video
//Example code!
var passport = require('passport');
var GooglePlusTokenStrategy = require('passport-google-plus-token');

// GOOGLE AUTH STRATAGIY
passport.use("googleToken", new GooglePlusTokenStrategy({
    clientID: '61950672392-bn1p622notf5mru483dopn7q0v8javke.apps.googleusercontent.com',
    clientSecret: 'HgrPPHjDLYnptT2u2NYv9Zn6'
}, aysnc(accessToken, refreshToken, profile, done) => {
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    console.log('profile', profile);
    //console.log('done', done);
}));