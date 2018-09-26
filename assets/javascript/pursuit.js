/*This script is built to creat new sections to be edited by pursuitions*/

var submissionsCount = 0;
var titleSelector = ["RECOVERY UPDATE! CHRIS 1ST TO TARGET!", "IS THERE ANYTHING DONIA CAN'T DO?", "THIS WEEKS PREVENTION MVP!", "", "GRAB THE MIC!", "DAY AT THE BEACH"];
var block = {
    blankSubmit: 
    '<div class="row">'
    +       '<div class="col-md-1"></div>'
    +       '<div class="col-md-7 main">'
    +           '<div class="about">'
    +           '<h1 class="hTag" id="hTag">About Me</h1>'
    +       '</div>'
    +       '<div class="">'
    +           '<img id="paw" class="thumb pic" src="assets/images/fun.jpg" style="float: left;">'
    +           '<p id="naw" class="naw">"spacer"'
    +           '</p>'
    +       '</div>'
    +       '<div class="">'
    +       '</div>'
    +       '</div>'
    +       '<div class="col-md-4">'
    +       '</div>'
    +    '</div>',
    
    contSelector: ["Pursuit People, Afternoon. Wanted to shout out of first recovery rep to hit target in July, Chris Swartz. The man has brought the heat all month long, setting a super consistent pace to his month. Keys to his success: along with a heavy dose of hustle, he makes it a priority on every call to relate with the business owner and find an area in which they can both agree upon. Simple Sauce: Up the engagement and get the business owners buy-in. Well done Chris! Way to lead the recovery charge. ",
    "Wanted to send over a convo that Donia CRUSHED today. Angel called in regarding NCR reviews and was pretty heated at first. Donia explained the why behind our review software, but pivoted the convo to page recommendations. The client was so happy about having her go through page recommendations he stated, I really really appreciate your help with this TWICE! So amazing. Later in the conversation he was wanting to downgrade his program due financial limitations but because she built so much rapport with him, she was able to talk about the benefits of not downgrading. We talked in the all hands about adding value and the power that brings. The fact that Donia not only address his initial concern about reviews, but also helped make his business more attractive for consumers, she built a relationship where the client walked away appreciating us and having more knowledge of our platform. Keep up the great work Donia! ",
    'Happy FriYAY! I am excited to share this weeks MVP....Andrew Muys! Andrew has been CRUSHING the conversations in prevention. He has taken on the NTC convos coming in every single day wanting to be better than when he walks in. He has been on the phone for about 6 months and is going above and beyond with the prevention role. Yesterday we were able to talk about confidence and articulating on the phone so clients walk away understanding and appreciating the call. Right after that, he had a billing call with someone who completed understood him and was able to answer the question in a timely manner! He was so happy about it he had to share with me!',
     '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',
     '"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."',
     'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'],

     photoSelector: ["assets/images/photo1.jpg", "assets/images/photo2.jpg", "assets/images/photo3.jpg", "assets/images/photo4.jpg", "assets/images/photo5.jpg"],

}; //END of Obj

//Maybe break this into some helper functions
$('document').ready(function () {
    console.log('Page Initialized');
    $('#submit').on('click', function () {
        let keeper = '#create' + submissionsCount.toString();
        let idTag = 'naw' + submissionsCount.toString();
        let classTag = 'naw' + submissionsCount.toString();
        let hTag = 'hTag' + submissionsCount.toString();
        let hClass = 'hTag' + submissionsCount.toString();
        let picTag = 'paw' + submissionsCount.toString();
        let picClass= 'pic' + submissionsCount.toString() + ' thumb';
        $(keeper).append(block.blankSubmit);
        $('.naw').prop("id", idTag);
        idTag = '#' + idTag;
        $(idTag).prop("class", classTag);
        $('.pic').prop("id", picTag);
        picTag = '#' + picTag;
        $(picTag).prop("class", picClass);
        $(picTag).attr("src", block.photoSelector[submissionsCount]);
        $('.hTag').prop("id", hTag);
        hTag = '#' + hTag;
        hClass = hClass + ' c';
        $(hTag).prop("class", hClass);
        $(hTag).text(titleSelector[submissionsCount]);
        console.log(idTag);
        $(idTag).text(block.contSelector[submissionsCount]);
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
                