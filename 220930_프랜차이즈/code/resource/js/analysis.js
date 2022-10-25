$(document).ready(function(){

    //----- 기존비즈맵

    //구독서비스 - 자세히 보기 텍스트 변경, 폼 유지
    $('#view1').on('click', function() {
        $('.modal1').css('display','block');
        $('.modal1').css('z-index','990');
        $('.pop_float').css('display','block');
    });
    
    $('#view2').on('click', function() {
        $('.modal1').css('display','block');
        $('.modal1').css('z-index','990');
        $('.pop_float').css('display','block');
    });
    
    //구독서비스에서 업종선택
    $('#interest_upjong1').on('click', function() {
        
        $('.sheet_02').css('display','block');
        $('.sheet_02').addClass('pop');
        $('.sheet_02').css('z-index','999');
        $('.modal1').css('display','block');
        $('.modal1').css('z-index','990');
    });

    //구독서비스에서 지역선택
    $('#interest_areacd1').on('click', function() {
        $('.sheet_01').css('display','block');
        $('.sheet_01').addClass('pop');
        $('.sheet_01').css('z-index','999');
        $('.modal1').css('display','block');
        $('.modal1').css('z-index','990');
    });
    
    //핸들
    $('#handle').on('click', function() {
        $('#pc_sheet').toggleClass('on');
        $('#handle').toggleClass('on');
     });

    //토글 로그인 클릭
    $('#toggle_click').on('click', function() {
        $('#toggle_login').toggleClass('on');
        $(this).toggleClass('on');
     });

    
    //구독하기 selected 색 수정
    $('.base select').change(function() {
        $('.base select').addClass('selected');
    }); 

    //scroll function
	// 스크롤 이벤트 .sheet04 영상콘텐츠에서 카테고리 상단고정
	// show_map '지도로 보기' 보이기
    $('.sheet_04 .sheet_body').on('scroll', function() {
        if ($('.sheet_04 .sheet_body').scrollTop() > 27) {
            $('.sheet_04 .sheet_body').addClass('absolute');
        } else {
            $('.sheet_04 .sheet_body').removeClass('absolute');
        }
    });
    $('.has_mapshow').on('scroll', function() {
        if ($('.has_mapshow').scrollTop() > 0) {
            $('.show_map').css('display','block');
        } else {
            $('.show_map').css('display','none');
        }
    });
    // 스크롤 - static


    //scroll function
	// 스크롤 이벤트 .sheet04 영상콘텐츠에서 카테고리 상단고정
	// 창 배경
    $('.sheet_05 .sheet_body').on('scroll', function() {
        if ($('.sheet_05 .sheet_body').scrollTop() > 0) {
            $('.sheet_05 .sheet_hd').removeClass('wh');
        } else {
            $('.sheet_05 .sheet_hd').addClass('wh');
        }
    });

    //md_sheet 창 위로 열고 닫기
    $('.md_up .pop_head > a').on('click', function() {
        $(this).parents('.md_up').toggleClass('up')
        $('.modal1').toggleClass('on')

        //show_map 지도로 보기 숨기기
        $('.show_map').css('display','none');

    });

    //snb 사이드 네비게이션 제어
    //snb 닫기
    $('#menuToggle > a').on('click', function() {
        $('.modal2').show();
        $('.snb_box').addClass('on');
    });
    $('#menuToggle2 > a').on('click', function() {
        $('.modal2').hide();
        $('.snb_box').removeClass('on');
    });
    //snb 열기


    //FAQ 장치
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
      const itemToggle = this.getAttribute('aria-expanded');
      
      for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
      }
      
      if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
      }
    }
    
    items.forEach(item => item.addEventListener('click', toggleAccordion));

    if ($(window).width() < 1024) {

    //흐름 -> index1.html

    //지역/업종 선택 #search1 클릭시 분석지역.sheet_01 열기
    $('#search1').on('click', function() {
        $('.sheet_01').show();
        $('.modal1').show();
    });

    //분석지역.sheet_01 선택완료시 .sheet_02 열기
    $('.idx1 .sheet_01 .loca_list li > a').on('click', function() {
        $('.sheet_01').hide();
        $('.sheet_02').show();
    });

    //.sheet_02 업종선택 카테1
    $('.row > li > button').on('click', function() {
        $('.cate2').css('display','block');
    });

    //.sheet_02 업종선택 카테2
    $('.cate2 > li > button').on('click', function() {
        $('.cate3_top').css('display','block');
    });

    //지역, 업종 선택 완료시 하단 팝업
    $('.cate3 > li > button').on('click', function() {
        $('.btp2').css('display','block');
    });

    //취소
    $('.btp2 .btn2').on('click', function() {
        $('.btp2').css('display','none');
    });   

    //확인
    $('.btp2 .btn1').on('click', function() {
        $('.btp2').css('display','none');
        $('.sheet_02').css('display','none');
        $('.modal1').css('display','none');
        //여기에 리포트 열기
    });    

    //뒤로가기, 닫기 기능
    //sheet_01에서
    $('.sheet_01 .back > a').on('click', function() {
        $('.sheet_01').hide();
        $('.modal1').hide();
    });
    $('.sheet_02 .back > a').on('click', function() {
        $('.sheet_02').hide();
        $('.sheet_01').show();
    });
    $('.close_box > a').on('click', function() {
        $('.sheet_02').hide();
        $('.sheet_01').hide();
        $('.modal1').hide();
    });

    //#search2 (유동인구, 밀집도, 뜨는업종, 영상콘텐츠 검색창) 클릭시 
    $('#search2').on('click', function() {
        $('.sheet_01').show();
        $('.modal1').show();
    });

    //분석지역.sheet_01 선택완료시 .sheet_02 열기
    $('.sheet_01 .loca_list li > a').on('click', function() {
        $('.idx2 .btp2').css('display','block');
    });

    //(유동인구, 밀집도, 뜨는업종, 영상콘텐츠 검색창)분석지역 하단팝업
    //취소
    $('.idx2 .btp2 .btn2').on('click', function() {
        $('.idx2 .btp2').css('display','none');
        $('.idx2 .btp2').css('display','none');
    });   

    
    //확인
    $('.idx2 .btp2 .btn1').on('click', function() {
        $('.idx2 .btp2').css('display','none');
        $('.idx2 .sheet_01').css('display','none');
        $('.idx2 .modal1').css('display','none');
        //여기에 리포트 열기
    });

    //구독서비스 - 확인, 닫기
    //닫기(팝업 상단 오른쪽)
    $('.pop_float .close_box').on('click', function() {
        $('.pop_float').css('display','none');
        $('.modal1').css('display','block');
    });
    //확인,닫기(팝업 하단) - 확인 클릭시 해당 checkbox checked
    $('.pop_float button').on('click', function() {
        $('.pop_float').css('display','none');
        $('.modal1').css('display','none');
    });

    //영상콘텐츠 - 카테고리
    $('#filter1').on('click', function() {
        $('.sheet_01').css('display','block');
        $('.modal2').css('display','block');
    });
    $('#filter2').on('click', function() {
        $('.sheet_06').css('display','block');
    });


    };

    //!! --------------나중에 지워주세요 흐름 파악용 END --------------!!//

    //static 변경 - 구독서비스
    function static() {
        $('.static').parents('html').css('overflow-y','scroll');
        $('.static').css('height','fit-content');
    }

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

    //!! --------------미디어쿼리 1024 이상 START --------------!!//
    if ($(window).width() >= 1024) {
        static();
    
        //카테고리 안쪽 max height 맞춰 영역 크기 설정
        function maxHeight1() {
            var ht = $(window).height();
            if( ht < 680){
                $('.sheet_01').addClass('side');
                $('.sheet_02').addClass('side');
                $('.middle ul li').addClass('side_box');
                $('.sheet_01 .loca_list_bx').css('max-height',200);
                $('.sheet_02 .sheet_body').css('max-height',300);


            } else if(ht < 720){
                $(' .sheet_01 .loca_list_bx').css('max-height',ht - 430);
                $(' .sheet_02 .sheet_body').css('max-height',ht - 430);
                $('.sheet_01').removeClass('side');
                $('.sheet_02').removeClass('side');
                $('.middle ul li').removeClass('side_box');
            } else {
                $(' .sheet_02 .sheet_body').css('max-height',ht - 463);
                $(' .sheet_01 .loca_list_bx').css('max-height',ht - 465);

                $('.sheet_01').removeClass('side');
                $('.sheet_02').removeClass('side');
                $('.middle ul li').removeClass('side_box');
            }
        }
        maxHeight1();

        //sheet_01, sheet_02(분석 지역, 업종) - PC
        $('.pc_sheet .middle ul li:nth-child(1) > a').on('click',function(){
            //on css 설정
            $('.sheet_01').toggleClass('on');
            $('.sheet_02').removeClass('on');
            $('.pc_sheet .middle ul li:nth-child(2)').removeClass('on');
            $('.pc_sheet .middle ul li:nth-child(1)').toggleClass('on');
        })

        $('.pc_sheet .middle ul li:nth-child(2) > a').on('click',function(){
            //on css 설정
            $('.sheet_02').toggleClass('on');
            $('.sheet_01').removeClass('on');
            $('.pc_sheet .middle ul li:nth-child(1)').removeClass('on');
            $('.pc_sheet .middle ul li:nth-child(2)').toggleClass('on');

            //스크린 높이 640보다 작을 경우
            
            maxHeight1();
        })

        $('.sheet_01 .loca_list li > a').on('click', function() {
            //on css 설정
            $('.sheet_01').removeClass('on');
            $('.pc_sheet .middle ul li').removeClass('on');
            $('.sheet_02').addClass('on');
            $('.pc_sheet .middle ul li:nth-child(2)').addClass('on');
        });

        //.sheet_02 업종선택 카테1
        $('.row > li > button').on('click', function() {
            $('.cate2').css('display','block');
            $('.row').css('display','none');
        });

        //.sheet_02 업종선택 카테2
        $('.cate2 > li > button').on('click', function() {

            $('.cate3_top').css('display','block');
            maxHeight1();
        });

        //지역, 업종 선택 완료시 하단 팝업
        $('.cate3 > li > button').on('click', function() {
            $('.sheet_02').removeClass('on');
            $('.pc_sheet .middle ul li:nth-child(2)').removeClass('on');
        });

    
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 0) {
                $('.static .menu_top').css('position','fixed');
                $('.static .menu_top').addClass('scroll');
                $('.middle_logo .logo_box').css('margin-top',120);
                $('.support').css('margin-top',120);
            } else {
                $('.static .menu_top').css('position','static');
                $('.middle_logo .logo_box').css('margin-top',60);
                $('.static .menu_top').removeClass('scroll');
                $('.support').css('margin-top',60);
            }
        });

        $(window).resize(function() {
            $('.md_sheet').css( 'transition','0');            
            maxHeight1();
         });        
         $('.pc_st').addClass('static');


    } else{
        setScreenSize();
        windowHtSize();
        $('.pc_st').removeClass('static');
        //window height 잡을때 모바일에서 overflow-y 되었던 html 원래대로
        $('html').css('overflow-y','hidden');
    }

    
    //window 화면 창 변경시
    $(window).resize(function() {
        if ($(window).width() >= 1024){
            static();
            $('.pc_st').addClass('static');
        } else {
            setScreenSize();
            windowHtSize();
            $('.pc_st').removeClass('static');
            $('html').css('overflow-y','hidden');
        }    
        
    });

    if ($(window).width() <= 280) {
        $("#search1").attr("placeholder", "지역/업종 선택");
        $("#search2").attr("placeholder", "지역 선택");
    }

    //----- KFA 추가 제이쿼리
    
    //640 이하일때 이미지 변경
    function banner_change(){
        if ($(window).width() <= 480) {
            $('.mb_banner_box').addClass('mbsize');
            $('.mbsize img').attr({
                src: "resource/images/banner/mini1_banner1_mo.png"
            });
        }else {
            
            $('.mb_banner_box').removeClass('mbsize');
            $('.mb_banner_box img').attr({
                src: "resource/images/banner/mini1_banner1_tablet.png"
            });
        }
    }
    banner_change();

    $(window).resize(function() {
        banner_change();
    });

    //데이터 출처 팝업
    $('#data_from').on('click', function() {
        $('#data_from_show').css('display','block');
        $('.modal1').css('display','block');
    });
    $('#close_alert').on('click', function() {
        $('#data_from_show').css('display','none');
        $('.modal1').css('display','none');
    });
    $('#close_alrt_pop').on('click', function() {
        $('#data_from_show').css('display','none');
        $('.modal1').css('display','none');
    });
});