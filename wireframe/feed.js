/*This is the JavaScript fo the Pursuit Article Feed page */

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

  db = firebase.database();

  var submission = $('#input').val();
  //Used to setup database for the first time
  /*var submissions = 'fine';
  db.ref().set({
    submissions: submissions,
    date: "This event Cray",
    date2: "Crayfishes event of magic",
    date3: "The mega event that everyone knows about but no one is ready for"
  });*/

  //Dates update turned off for wireframe demonstrations
  /*db.ref().on('value', function(snapshot){
    let d = $('<div>').attr('class', 'submission');
    let dates = snapshot.val()
    //console.log(dates);
    $('.cal').append(d);
      d.append($('<p>').text(dates.date).attr('href', ''));
      d.append($('<p>').text(dates.date2).attr('href', ''));
      d.append($('<p>').text(dates.date3).attr('href', ''));
  });*/

  db.ref('/submissions').on('child_added', function(snapshot, prevChildKey){
    console.log('Added this Child right here--->')
    let div = $('<div>').attr('class', 'posting');
    div.append($('<h5>').text(snapshot.val().title));
    div.append($('<p>').text(snapshot.val().message));
    $('.feed').prepend(div);
  });

  site = 'https://www.googleapis.com/auth/calendar.readonly'

  $.ajax({
    url: site,
    method: 'GET',
  }).then(function(response){
    console.log(response);
  });