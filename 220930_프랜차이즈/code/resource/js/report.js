$( document ).ready(function() {
    
    //스크롤 헤더 변화
    $('#report1').on('scroll', function() {

        if ($(this).scrollTop() > 120) {
            $('.rpt_hd').hide();
            $('.filter').addClass('fix');
            $('.mb_rp_gnb_box').addClass('fix');
            $('.rp_sheet_hd').removeClass('wh');
            $(this).addClass('fix');
        } else {
            $('.rpt_hd').show();
            $('.filter').removeClass('fix');
            $('.mb_rp_gnb_box').removeClass('fix');
            $('.rp_sheet_hd').addClass('wh');
            $(this).removeClass('fix');
        }
    });


// 퀵메뉴
$('.rp_gnb li a').click(function() {
    // 버튼 hover 이벤트
    $(this).parent().addClass('on');
    $(this).parent().siblings().removeClass('on');
    return false
});
// target 위치 표시와, 이동  
var sections = $('section'),
    nav = $('.rp_gnb'),
    nav_height = nav.outerHeight();


$('.sc_box').on('scroll', function() {
    var cur_pos = $(this).scrollTop();
    if( $(this).scrollTop() == 0){
        $('.rp_gnb').children('li').removeClass('on');
        $('.rp_gnb').children('li').eq(0).addClass('on');
    } else{
        sections.each(function() {
            var top = $(this).offset().top;
                bottom = top + $(this).height();
    
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').parent().removeClass('on');
                sections.removeClass('active');
    
                $(this).parent().addClass('on');
                nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('on');
            }
        });
    }

});


nav.find('.sc_box').on('click', function() {
    var $el = $(this),
        id = $el.attr('href');

    $('.sc_box').animate({
        scrollTop: $(id).offset().top
    }, 500);

    return false;
});





//mobile 아니고 pc 일때 창 사이즈 변경시 다시 열어 반응형 크기에 echart 맞추기
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
if(!isMobile) {
    //pc 
   $(window).resize(function() {
       location.reload();
   });

} else {
    //mobile
}



});//END JQUERY
