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

    var tab_inner = $('.pc_tab_right').width();
    var echart_inner = tab_inner - 64;
    document.documentElement.style.setProperty('--inner', `${echart_inner}px`);

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
        } )
      
      //지역분석 > 집객시설확인 작은 버튼
    $( '.btn_allin > .btn4').click( function() {
        $(this).toggleClass('on');
      } );

      //하트 누르고 빼기
    $( '.heart_a').click( function() {
        $(this).toggleClass('on');
      } );

      //지역,매장선택하고 확인 클릭시에 탭리포트 보이기
      //pc_tab_right 에 show, tab_right_handle에 show
    $( '.select_main_show .btn1').click( function() {
      
      //탭리포트 
      $(this).parents('.pc_sheet').children('.pc_tab_right').addClass('show');
      $(this).parents('.pc_sheet').children('.tab_right_handle').addClass('show');
      
      //select_main_show 닫기
      $(this).parents('.select_main_show').removeClass('on');
      $(this).parents('.select_main_box').children('.select_main').removeClass('on');

      } );

    // 최상단 탭(매출, 고객, 금융, 지역, 오늘드림, 관심지역) 클릭시 각 탭 열리고 닫힘
        $(".tab_box > ul > li > a").on("click", function(){
            var num = $(".tab_box > ul > li > a").index($(this));
            var num2 = num+1;
            
            // tab 이동시에 두번째 mini report는 닫기
            $('.pc_tab_right').removeClass('on');
            $('.tab_right_handle').removeClass('show');

            // tab_box에 on 넣기
           $(".tab_box > ul > li").removeClass("on");
            $('.tab_box > ul > li:eq(' + num + ')').addClass("on");
            

            // pc_sheet 기존 열렸던것 닫기
            $('.pc_sheet').removeClass("on");
            $('.pc_tab_right').removeClass("show");
            $('.select_main_show').removeClass("on");

            // tab_box index 맞춰서 pc_sheet 보이기
            $('.here' + num2 + '').addClass("on");
        });

    // alert close 누를시에 닫기
    $('.close_alert').click(function(){
      $(this).parents('.alrt_pop').removeClass('show');
      $('.modal').css('display','none');
    });

    // 매출 > 매출분석요약 > 버튼 클릭시 팝업
    //오늘드림
    $('#predictionShow').click(function(){
      $('.modal').css('display','block');
      $('.pop1').addClass('show');
    });
    
    //표준타입
    $('#standardShow').click(function(){
      $('.modal').css('display','block');
      $('.pop2').addClass('show');
    });
    
    //몰타입
    $('#mallShow').click(function(){
      $('.modal').css('display','block');
      $('.pop3').addClass('show');
    });
    
    //마트타입
    $('#martShow').click(function(){
      $('.modal').css('display','block');
      $('.pop4').addClass('show');
    });
    
    //시뮬레이션
    $('#simulation').click(function(){
      $('.modal').css('display','block');
      $('.pop5').addClass('show');
    });

});