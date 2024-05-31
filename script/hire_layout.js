$(document).ready(function(){

    //1. 탭컨텐츠 변수선언
    let tab_mnu = $('#hire_tab a');

    //2. 메뉴를 클릭시 해당 컨텐츠가 나오게 한다.
    tab_mnu.click(function(){
      $('.tab').hide(); //보이는 컨텐츠 숨긴다.
      $(this).next().show();

      //선택한 메뉴에 서식을 적용하기 그외 다른 a요소에 서식을 제거한다.
      $(this).addClass('act').parent().siblings().find('a').removeClass('act');

      return false; //새로고침방지      
    });

    $(window).scroll(function(){
      let width=$(window).width();
      let sposy = $(this).scrollTop();
    // pc
    if(width >= 1025){
        // 인재철학 이미지 아래 글
        if(sposy>1300){
            $('.ph_img1 > p:last-child').addClass('on');
        }else{
            $('.ph_img1 > p:last-child').removeClass('on');
        }

        if(sposy>1800){
            $('.ph_img2 > p:last-child').addClass('on1');
        }else{
            $('.ph_img2 > p:last-child').removeClass('on1');
        }

        if(sposy>2300){
            $('.ph_img3 > p:last-child').addClass('on');
        }else{
            $('.ph_img3 > p:last-child').removeClass('on');
        }
        
        // 인재철학 말풍선
        if(sposy>3000){
            $('#ph2 > ul > .balloon1_p').css({"width":"800px","height":"200px"});
        }else{
            $('#ph2 > ul > .balloon1_p').css({"width":"0px","height":"0px"});
        }

        if(sposy>3600){
            $('#ph2 > ul > .balloon2_p').css({"height":"200px"});
        }else{
            $('#ph2 > ul > .balloon2_p').css({"height":"0px"});
        }

        if(sposy>3900){
            $('#ph2 > ul > .balloon3_p').css({"width":"800px","height":"200px"});
        }else{
            $('#ph2 > ul > .balloon3_p').css({"width":"0px","height":"0px"});
        }
    }

    // tablet
    if(width >= 768 && width <= 1024){
        // 인재철학 이미지 아래 글
        if(sposy>1100){
            $('.ph_img1 > p:last-child').addClass('on');
          }else{
            $('.ph_img1 > p:last-child').removeClass('on');
          }
    
          if(sposy>1600){
            $('.ph_img2 > p:last-child').addClass('on1');
          }else{
            $('.ph_img2 > p:last-child').removeClass('on1');
          }
    
          if(sposy>2100){
            $('.ph_img3 > p:last-child').addClass('on');
          }else{
            $('.ph_img3 > p:last-child').removeClass('on');
          }
          
          // 인재철학 말풍선
          if(sposy>2500){
            $('#ph2 > ul > .balloon1_p').css({"width":"800px","height":"200px"});
          }else{
            $('#ph2 > ul > .balloon1_p').css({"width":"0px","height":"0px"});
          }
    
          if(sposy>2900){
            $('#ph2 > ul > .balloon2_p').css({"height":"200px"});
          }else{
            $('#ph2 > ul > .balloon2_p').css({"height":"0px"});
          }
    
          if(sposy>3100){
            $('#ph2 > ul > .balloon3_p').css({"width":"800px","height":"200px"});
          }else{
            $('#ph2 > ul > .balloon3_p').css({"width":"0px","height":"0px"});
          }
        }

    // mobile
    if(width < 767){
        // 인재철학 이미지 아래 글
        if(sposy>600){
            $('.ph_img1 > p:last-child').addClass('on');
          }else{
            $('.ph_img1 > p:last-child').removeClass('on');
          }
    
          if(sposy>1000){
            $('.ph_img2 > p:last-child').addClass('on1');
          }else{
            $('.ph_img2 > p:last-child').removeClass('on1');
          }
    
          if(sposy>1400){
            $('.ph_img3 > p:last-child').addClass('on');
          }else{
            $('.ph_img3 > p:last-child').removeClass('on');
          }
          
          // 인재철학 말풍선
          if(sposy>2000){
            $('#ph2 > ul > .balloon1_p').css({"height":"145px"});
          }else{
            $('#ph2 > ul > .balloon1_p').css({"height":"0px"});
          }
    
          if(sposy>2400){
            $('#ph2 > ul > .balloon2_p').css({"height":"145px"});
          }else{
            $('#ph2 > ul > .balloon2_p').css({"height":"0px"});
          }
    
          if(sposy>2700){
            $('#ph2 > ul > .balloon3_p').css({"height":"145px"});
          }else{
            $('#ph2 > ul > .balloon3_p').css({"height":"0px"});
          }
        }
    });

    // view more 클릭 했을 때
      const b = $('#btn01');

    b.click(function(){
        
      $('#ideal_txt').slideToggle().css({"display":"flex"});
    
      $(window).scroll(function(){
        let width=$(window).width();
        let sposy = $(this).scrollTop();
      // pc
      if(width >= 1025){
        $('footer').css('margin-top','5330px');
          // 인재철학 이미지 아래 글
          if(sposy>1600){
              $('.ph_img1 > p:last-child').addClass('on');
          }else{
              $('.ph_img1 > p:last-child').removeClass('on');
          }

          if(sposy>2200){
              $('.ph_img2 > p:last-child').addClass('on1');
          }else{
              $('.ph_img2 > p:last-child').removeClass('on1');
          }

          if(sposy>2800){
              $('.ph_img3 > p:last-child').addClass('on');
          }else{
              $('.ph_img3 > p:last-child').removeClass('on');
          }
          
          // 인재철학 말풍선
          if(sposy>3800){
              $('#ph2 > ul > .balloon1_p').css({"width":"800px","height":"200px"});
          }else{
              $('#ph2 > ul > .balloon1_p').css({"width":"0px","height":"0px"});
          }

          if(sposy>4050){
              $('#ph2 > ul > .balloon2_p').css({"height":"200px"});
          }else{
              $('#ph2 > ul > .balloon2_p').css({"height":"0px"});
          }

          if(sposy>4300){
              $('#ph2 > ul > .balloon3_p').css({"width":"800px","height":"200px"});
          }else{
              $('#ph2 > ul > .balloon3_p').css({"width":"0px","height":"0px"});
          }
      }

      // tablet
      if(width >= 768 && width <= 1024){
        $('footer').css('margin-top','4780px');
          // 인재철학 이미지 아래 글
          if(sposy>2200){
              $('.ph_img1 > p:last-child').addClass('on');
            }else{
              $('.ph_img1 > p:last-child').removeClass('on');
            }
      
            if(sposy>2600){
              $('.ph_img2 > p:last-child').addClass('on1');
            }else{
              $('.ph_img2 > p:last-child').removeClass('on1');
            }
      
            if(sposy>2900){
              $('.ph_img3 > p:last-child').addClass('on');
            }else{
              $('.ph_img3 > p:last-child').removeClass('on');
            }
            
            // 인재철학 말풍선
            if(sposy>3300){
              $('#ph2 > ul > .balloon1_p').css({"width":"800px","height":"200px"});
            }else{
              $('#ph2 > ul > .balloon1_p').css({"width":"0px","height":"0px"});
            }
      
            if(sposy>3600){
              $('#ph2 > ul > .balloon2_p').css({"height":"200px"});
            }else{
              $('#ph2 > ul > .balloon2_p').css({"height":"0px"});
            }
      
            if(sposy>3900){
              $('#ph2 > ul > .balloon3_p').css({"width":"800px","height":"200px"});
            }else{
              $('#ph2 > ul > .balloon3_p').css({"width":"0px","height":"0px"});
            }
          }

      // mobile
      if(width <= 767){
        $('footer').css('margin-top','4395px');
          // 인재철학 이미지 아래 글
          if(sposy>1500){
              $('.ph_img1 > p:last-child').addClass('on');
            }else{
              $('.ph_img1 > p:last-child').removeClass('on');
            }
      
            if(sposy>1900){
              $('.ph_img2 > p:last-child').addClass('on1');
            }else{
              $('.ph_img2 > p:last-child').removeClass('on1');
            }
      
            if(sposy>2300){
              $('.ph_img3 > p:last-child').addClass('on');
            }else{
              $('.ph_img3 > p:last-child').removeClass('on');
            }
            
            // 인재철학 말풍선
            if(sposy>2900){
              $('#ph2 > ul > .balloon1_p').css({"height":"145px"});
            }else{
              $('#ph2 > ul > .balloon1_p').css({"height":"0px"});
            }
      
            if(sposy>3100){
              $('#ph2 > ul > .balloon2_p').css({"height":"145px"});
            }else{
              $('#ph2 > ul > .balloon2_p').css({"height":"0px"});
            }
      
            if(sposy>3300){
              $('#ph2 > ul > .balloon3_p').css({"height":"145px"});
            }else{
              $('#ph2 > ul > .balloon3_p').css({"height":"0px"});
            }
          }
      });
  });
});


//----------gnb 메뉴 슬라이드---------------
const gnb = $('.gnb');
const header = $('header');
let gnb_h = $('.gnb_box').outerHeight();

  $(document).ready(function(){

    //gnb 슬라이드 함수
    $(gnb).hover(function(){ //마우스 오버시
      $(header).stop().animate({'height':gnb_h},500);
      $('.h_inner').css('border-bottom','1px solid #ccc')
    },function(){ //마우스 아웃시
      $(header).stop().animate({'height':'100px'},500);
      $('.h_inner').css('border-bottom','1px solid rgba(51,51,51,0.2)')
    })

    //마우스 오버시 배경색,폰트컬러 변경 함수
    $(header).hover(function(){
      $(header).css('background','#fff')
      $('.lnb > li > a').css('opacity','1')
    })

  });


//------------gnb 호버시 서브메뉴 배경색-------------
$(document).ready(function(){
  $('.gnb > li').hover(function(){
    $(this).siblings().css('background','none');
    $(this).css({'background-image':'url(https://www.color-hex.com/palettes/7431.png)','background-position-y':'100px','background-repeat':'no-repeat'});
  },function(){
    $(this).css('background','none');
  })
})

// 헤더 메뉴 언어 설정버튼

  //select를 누르면 active를 추가해주는 함수
  function toggleSelectBox(selectBox) {
    selectBox.classList.toggle("active");
  }

  //select클릭이벤트와 active 함수 연결
  const selectBoxElements = document.querySelectorAll(".select");

  selectBoxElements.forEach(selectBoxElement => {
    selectBoxElement.addEventListener("click", function (e){
      const targetElement = e.target;
      const isOptionElement = targetElement.classList.contains("option");
  
      if(isOptionElement){
        selectOption(targetElement);
      }
      
      toggleSelectBox(selectBoxElement);
    });
  });

  //option선택시 해당값 선택
  function selectOption(optionElement) {
    const selectBox = optionElement.closest(".select");
    const selectedElement = selectBox.querySelector(".selected-value");
    selectedElement.textContent = optionElement.textContent;
  }

  //제이쿼리로 슬라이드 토글효과 만들기
  $(document).ready(function(){
    const langBtn = $(".selected");
    const optionBtn = $(".option");

    //언어버튼 클릭시 슬라이드 토글
    langBtn.click(function(){
      $(".util ul").slideToggle();
    });
    optionBtn.click(function(){
      $(".util ul").slideUp();
    })

    //화면 밖 여백 클릭시 토글 닫기
    $('html').click(function(e){
      //특정 부모의 자식이 아닐경우 이벤트 실행
      if($(e.target).parents('.select').length < 1){
        //console.log('슬라이드 밖이다')
        $(".util ul").slideUp();
      }
    })
  })

//------------헤더 좌우스크롤시 보여지게 하기----------
$(document).ready(function(){

  //새로고침시 헤더위치 변경
  let bwLeft = $(document).scrollLeft();
  $('.h_inner').css('left',`-${bwLeft}px`)

  //스크롤 할때마다 자동으로 헤더위치 변경
  $(window).scroll(function(){
    bwLeft = $(document).scrollLeft();
    $('.h_inner').css('left',`-${bwLeft}px`)
  })
})



//------------1200px보다 화면이 작아질때, 컨텐츠크기를 1200px로 변경하여 스크롤바로 이동시 제대로 보이도록함--------------------
$(document).ready(function(){
  var screenWidth = $(window).width()

  function screen(){
    if(screenWidth >= 1200){
      //body컨텐츠의 하위 자식요소들 전부 속성 변경
      $('body').children().css('width','100%')
    }else if(screenWidth>1024){
      $('body').children().css('width','1200px')
    }else if(screenWidth<=1024){
      $('body').children().css('width','100%')
    }else{}
  }
  screen();

  $(window).resize(function(){
    screenWidth = $(window).width()
    screen();
  })
})

//-----------------토글버튼 메뉴바 슬라이드 서식----------------
$('#t_gnb > li p').click(function(){
  //클릭할때마다 앵글다운 아이콘이 바뀌도록 수정할 것
  //$(this).find('i').css('transform','rotate(180deg)')
  $(this).parent().siblings().find('.t_sub').stop().slideUp()
  $(this).next().stop().slideToggle()
})

$('.fa-bars').click(function(){
  $('.t_btn').hide()
})