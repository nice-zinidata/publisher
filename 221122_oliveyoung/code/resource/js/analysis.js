$(document).ready(function(){

  //공통 - 모바일, 탭 오류 height 100%

    //모바일 화면 창에서 vh100 오류 수정
    function setScreenSize() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setScreenSize();
    window.addEventListener('resize', setScreenSize);
    
    //window height 크기
    function windowHtSize(){
        var height = $(window).height();
        $('body').css('height',height);    
        $('html').css('height',height);    
    }
    windowHtSize();

    //클릭시 열기
    $( '.select_main' ).click( function() {
    $(this).toggleClass('on');
    $('.select_main_show').toggleClass('on');
      } );

});