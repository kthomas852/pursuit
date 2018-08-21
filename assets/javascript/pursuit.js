/*This script is built to creat new sections to be edited by pursuitions*/

var submissionsCount = 1;

var block = {
    blankSubmit: 
    '<div class="row">'
     +       '<div class="col-md-1"></div>'
     +       '<div class="col-md-7 main">'
     +           '<div class="about">'
     +           '<c>About Me</c>'
     +       '</div>'
     +       '<div>'
     +           '<img class="thumb" src="assets/images/fun.jpg" style="float: left;">'
     +           '<p id="naw">'
     +           '</p>'
     +       '</div>'
     +       '</div>'
     +       '<div class="col-md-4">'
     +       '</div>'
     +    '</div>',
     
    }; //END of Obj
    
               
$('document').ready(function () {
    console.log('Page Initialized');
    $('#submit').on('click', function () {
        let keeper = '#create' + submissionsCount.toString();
        let idTag = '#naw' + submissionsCount.toString();
        $(keeper).append(block.blankSubmit);
        $('#naw').attr("id", idTag);
        console.log(idTag);
        $('#naw2').text("This is working");
        submissionsCount++;
    });
    $('#validate').on('click', function () {
        let tempSub = submissionsCount;
        let current = '#create' + (tempSub - 1).toString();
        $(current).css('background-color', '#11ffee00');
        $('#validate #reject').empty();
        console.log('CSS changed');
    });

    $('#reject').on('click', function () {
        let tempSub = submissionsCount;
        let current = '#create' + (tempSub - 1).toString();
        $(current).empty();
    })
    //$('#naw').text('Wont kill any sharks');
});
                