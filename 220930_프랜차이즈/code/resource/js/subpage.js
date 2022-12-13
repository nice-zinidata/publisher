$(document).ready(function() {
//2022 12월 추가된 js

$('.choice_wrap ul > li a').on("click",function(){
    var choice = $(".choice_wrap ul > li").index($(this).parents('li'));
    var choice_order = choice + 2;
    

    //선택한 번호 display:block;
    $('.choice_wrap ul > li').removeClass("on");
    $('.choice_wrap ul > li:eq(' + choice + ')').addClass("on");


    //선택한 번호에 맞춰 지도화면 보이기   
    $('.container_wrap').css("display","none");
    $('.ct_wrap' + choice_order).css("display","block");
});

});//end of document ready