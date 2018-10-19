/*JavaScript file for the Google API calls and Calendar access*/

var gapiKey = "AIzaSyArSx2n9G-F-ZDAnw5fRss-1u7JQVbzeDY";
var gClientID = "91549918706-hc3se5ci4stuobbatnn617vgutk6hhca.apps.googleusercontent.com";
var calKey = ""
var gURL = "https://www.googleapis.com/calendar/v3/calendars/" + gClientID + "/events?key=" + gapiKey;

console.log("going AJAX");
$.ajax({
    url: gURL,
    headers: {
        'Authorization': 'Bearer ' + calKey,
    },
    type: "GET",
    success: function(data){
        console.log(data)
    }
}).then(function (response) {
    console.log(response);
}); 