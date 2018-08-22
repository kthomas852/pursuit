//This is the function for the hidden variables

var submissionCount = 0;
var ttSelector = ["RECOVERY UPDATE! CHRIS 1ST TO TARGET!", "IS THERE ANYTHING DONIA CAN'T DO?", "THIS WEEKS PREVENTION MVP!", "", "", ""];

var hide = {
    blankSubmit: 
    '<div class="row">'
    +       '<div class="col-md-1"></div>'
    +       '<div class="col-md-9 main">'
    +           '<div class="about">'
    +           '<h1 class="hTag" id="hTag">About Me</h1>'
    +       '</div>'
    +       '<div class="">'
    +           '<img id="paw" class="thumb pic" src="../assets/images/fun.jpg" style="float: left;">'
    +           '<p id="naw" class="naw">"spacer"'
    +           '</p>'
    +       '</div>'
    +       '<div class="">'
    +       '<button class="btn btn-primary btn-sm">Like</button> <button class="btn btn-primary btn-sm">Comment</button>'
    +       '</div>'
    +       '</div>'
    +       '<div class="col-md-2">'
    +       '</div>'
    +    '</div>',
    
    contSelector: ["Pursuit People, Afternoon. Wanted to shout out of first recovery rep to hit target in July, Chris Swartz. The man has brought the heat all month long, setting a super consistent pace to his month. Keys to his success: along with a heavy dose of hustle, he makes it a priority on every call to relate with the business owner and find an area in which they can both agree upon. Simple Sauce: Up the engagement and get the business owners buy-in. Well done Chris! Way to lead the recovery charge. ",
    "Wanted to send over a convo that Donia CRUSHED today. Angel called in regarding NCR reviews and was pretty heated at first. Donia explained the why behind our review software, but pivoted the convo to page recommendations. The client was so happy about having her go through page recommendations he stated, I really really appreciate your help with this TWICE! So amazing. Later in the conversation he was wanting to downgrade his program due financial limitations but because she built so much rapport with him, she was able to talk about the benefits of not downgrading. We talked in the all hands about adding value and the power that brings. The fact that Donia not only address his initial concern about reviews, but also helped make his business more attractive for consumers, she built a relationship where the client walked away appreciating us and having more knowledge of our platform. Keep up the great work Donia! ",
    'Happy FriYAY! I am excited to share this weeks MVP....Andrew Muys! Andrew has been CRUSHING the conversations in prevention. He has taken on the NTC convos coming in every single day wanting to be better than when he walks in. He has been on the phone for about 6 months and is going above and beyond with the prevention role. Yesterday we were able to talk about confidence and articulating on the phone so clients walk away understanding and appreciating the call. Right after that, he had a billing call with someone who completed understood him and was able to answer the question in a timely manner! He was so happy about it he had to share with me!',
     "",
     "",
     ""],

     photoSelector: ["../assets/images/photo1.jpg", "../assets/images/photo2.jpg", "../assets/images/photo3.jpg", "../assets/images/photo4.jpg", "../assets/images/photo5.jpg"],

}; //END of Obj


$('document').ready(function () {
    console.log('Page Initialized');
    $('#hidden').on('click', function () {
        for(i=0; i<3; i++){
        let keeper = '#create' + submissionCount.toString();
        let idTag = 'naw' + submissionCount.toString();
        let classTag = 'naw' + submissionCount.toString();
        let hTag = 'hTag' + submissionCount.toString();
        let hClass = 'hTag' + submissionCount.toString();
        let picTag = 'paw' + submissionCount.toString();
        let picClass= 'pic' + submissionCount.toString() + ' thumb';
        let tempSub = submissionCount;
        let current = '#create' + (tempSub).toString();
        $(keeper).append(hide.blankSubmit);
        $('.naw').prop("id", idTag);
        idTag = '#' + idTag;
        $(idTag).prop("class", classTag);
        $('.pic').prop("id", picTag);
        picTag = '#' + picTag;
        $(picTag).prop("class", picClass);
        $(picTag).prop("src", hide.photoSelector[submissionCount]);
        $('.hTag').prop("id", hTag);
        hTag = '#' + hTag;
        hClass = hClass + ' c';
        $(hTag).prop("class", hClass);
        $(hTag).text(ttSelector[submissionCount]);
        console.log(idTag);
        $(idTag).text(hide.contSelector[submissionCount]);
        $(current).css('background-color', '#11ffee00');
        submissionCount++;
        };
    });
});