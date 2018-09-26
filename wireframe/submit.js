/* This is the submission JS that takes care of uploads to FireBase */
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCnmHqTk9X8HD_T852mvO29QN370QKmeA0",
    authDomain: "pursuit-19db7.firebaseapp.com",
    databaseURL: "https://pursuit-19db7.firebaseio.com",
    projectId: "pursuit-19db7",
    storageBucket: "pursuit-19db7.appspot.com",
    messagingSenderId: "61950672392"
  };
  firebase.initializeApp(config);

  var sdb = firebase.database();

  $('#send-up').click(function(){
      let title = $('#title').val();
      let email = $('#email').val();
      let message = $('#message').val();
      let date = moment().format('X');

      $('#title').val('');
      $('#email').val('');
      $('#message').val('');

      sdb.ref('/submissions').push({
          title: title,
          email: email,
          message: message,
          subDate: date
      });
  })