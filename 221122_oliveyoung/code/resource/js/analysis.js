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

    //지역 | 매장 선택
    $( '.select_main' ).click( function() {
        $(this).toggleClass('on');
        $('.select_main_show').toggleClass('on');
      } );
    
      //유저 navigation 버튼 (오른쪽 최상단 클릭)
    $( '#showUserNavi' ).click( function() {
        $(this).toggleClass('on');
        $('.user_navi_ul').toggleClass('on');
      } );
      
      //지역분석 > 집객시설확인 작은 버튼
    $( '.btn_allin > .btn4').click( function() {
        $(this).toggleClass('on');
      } );

      //하트 누르고 빼기
    $( '.heart_a').click( function() {
        $(this).toggleClass('on');
      } );

    // 장소정보 > 업종선택 > 1차 카테고리(업종) 선택시 2차 카테고리 SHOW
        $(".tab_box > ul > li > a").on("click", function(){
            var num = $(".tab_box > ul > li > a").index($(this));
            var num2 = num+1;
            
            // tab_box에 on 넣기
           $(".tab_box > ul > li").removeClass("on");
            $('.tab_box > ul > li:eq(' + num + ')').addClass("on");
            
            // tab_box index 맞춰서 pc_sheet 보이기
            $('.pc_sheet').removeClass("on");
            $('.here' + num2 + '').addClass("on");
        });

});