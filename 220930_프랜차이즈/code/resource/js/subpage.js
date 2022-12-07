$(document).ready(function() {
//2022 12월 추가된 js

$('.choice_wrap ul > li a').on("click",function(){
    var choice = $(".choice_wrap ul > li").index($(this).parents('li'));
    var choice_order = choice + 1;

    $('.choice_wrap ul > li').removeClass("on");
    $('.choice_wrap ul > li:eq(' + choice + ')').addClass("on");
});

});//end of document ready