/*JavaScript file for the Google API calls and Calendar access*/
//var passport = require('passport');
//access info Token:
//ya29.GltCBoVH_sqxdtzXv10c4gsi-6Kt52NpCw-kMcNCOL_NwVo_tY_doYeXrayGuyJbQa1XcDTK1g1ke1wRw03h_sTPTzksPJX9ny6vsS-u9nIU2PTbHhZ-o7wfCtIO

var secret = "HgrPPHjDLYnptT2u2NYv9Zn6";
var gClientID = "61950672392-bn1p622notf5mru483dopn7q0v8javke.apps.googleusercontent.com";
var calKey = "ya29.GltCBoVH_sqxdtzXv10c4gsi-6Kt52NpCw-kMcNCOL_NwVo_tY_doYeXrayGuyJbQa1XcDTK1g1ke1wRw03h_sTPTzksPJX9ny6vsS-u9nIU2PTbHhZ-o7wfCtIO"
var gURL = "https://www.googleapis.com/calendar/v3/calendars/" + gClientID + "/events?key=" + secret + "&access_token=" + calKey;
//var gURL = "https://www.googleapis.com/calendar/v3/calendars/" + gClientID + "/events?sendNotifications=false&access_token=" + calKey

// console.log("going AJAX");
// $.ajax({
//     url: gURL,
//     // headers: {
//     //     "Authorization": "Bearer" + calKey,
//     // },
//     type: "GET",
//     success: function(data){
//         console.log(data)
//     }
// }).then(function (response) {
//     console.log(response);
// }); 

passport.use('googleToken', new GooglePlusTokenStrategy({
    clientID: gClientID,
    clientSecret: secret
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      // Should have full user profile over here
      console.log('profile', profile);
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
  
      const existingUser = await User.findOne({ "google.id": profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
  
      const newUser = new User({
        method: 'google',
        google: {
          id: profile.id,
          email: profile.emails[0].value
        }
      });
  
      await newUser.save();
      done(null, newUser);
    } catch(error) {
      done(error, false, error.message);
    }
  }));
  
  passport.use('facebookToken', new FacebookTokenStrategy({
    clientID: config.oauth.facebook.clientID,
    clientSecret: config.oauth.facebook.clientSecret
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      console.log('profile', profile);
      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      
      const existingUser = await User.findOne({ "facebook.id": profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
  
      const newUser = new User({
        method: 'facebook',
        facebook: {
          id: profile.id,
          email: profile.emails[0].value
        }
      });
  
      await newUser.save();
      done(null, newUser);
    } catch(error) {
      done(error, false, error.message);
    }
  }));