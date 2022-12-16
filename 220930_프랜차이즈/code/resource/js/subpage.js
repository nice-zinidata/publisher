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

$('.mb_choice_wrap ul > li a').on("click",function(){
    var mbchoice = $(".mb_choice_wrap ul > li").index($(this).parents('li'));
    var mbchoice_order = mbchoice + 2;
    

    //선택한 li class on
    $('.mb_choice_wrap ul > li').removeClass("on");
    $('.mb_choice_wrap ul > li:eq(' + mbchoice + ')').addClass("on");

    //선택한 번호 display:block;
    $('.choice_wrap ul > li').removeClass("on");
    $('.choice_wrap ul > li:eq(' + mbchoice + ')').addClass("on");

    //선택한 번호에 맞춰 지도화면 보이기   
    $('.container_wrap').css("display","none");
    $('.ct_wrap' + mbchoice_order).css("display","block");
});

    //snb 사이드 네비게이션 제어
    //snb 닫기
    $('#menuToggle > a').on('click', function() {
        $('.modal2').show();
        $('.snb_box').addClass('on');
    });
    //snb 열기
    $('#menuToggle2 > a').on('click', function() {
        $('.modal2').hide();
        $('.snb_box').removeClass('on');
    });
    
    //약관보기 팝업 열기
    $('.show_agree').on('click', function() {
        $('.modal2').show();
        $('.pop_div').show();
    });
    //약관보기 팝업 끄기
    $('.close_pop').on('click', function() {
        $('.modal2').hide();
        $(this).parents('.pop_div').hide();
    });

    function setScreenSize() {
        let vh = window.innerHeight * 1;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();

    window.addEventListener('resize', setScreenSize);
        //height 사이즈 측정

});//end of document ready