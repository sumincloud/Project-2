
$(document).ready(function(){

  let tab_mnu = $('.tab_con a')

  //2. 메뉴를 클릭시 해당 컨텐츠가 나오게 한다.
  tab_mnu.click(function(){

    $('.con').hide(); //보이는컨텐츠 숨긴다
    $(this).next().show();


    //선택한 메뉴에 서식을 적용하기 그외 다른 a요소에 서식을 제거한다. 선생님 정답
    $(this).addClass('on').parent().siblings().find('a').removeClass('on')
    return false;
  })



/* ------------------------------------------------------------------- */
/* 스크롤 이벤트들 */
  $(window).scroll(function(){
    let width = $(window).width();
    let sposY = $(this).scrollTop();
    // console.log(sposY)
    //첫번째 컨텐츠
    if(sposY >= 200){
      $('.woongin1 li:first-child').addClass('e_vent1');
      $('.woongin1 li:nth-child(2)').addClass('e_vent2');
      $('.woongin1 li:last-child').addClass('e_vent3');
    }else{
      $('.woongin1 li:first-child').removeClass('e_vent1');
      $('.woongin1 li:nth-child(2)').removeClass('e_vent2');
      $('.woongin1 li:last-child').removeClass('e_vent3');
    }
    
    /*두번째 컨텐츠 왼쪽에서 나오는거*/
    if(sposY >=1000){
      $('.box01').addClass('e_vent4');
      $('.box02').addClass('e_vent5');
      $('.box03').addClass('e_vent6');
    }else{
      $('.box01').removeClass('e_vent4');
      $('.box02').removeClass('e_vent5');
      $('.box03').removeClass('e_vent6');
    }

    // 세번째 컨텐츠 중앙에있다가 각자자리가는거
    if(sposY >=1900){
      $('.box04').addClass('e_vent7');
      $('.box05').addClass('e_vent8');
      $('.box06').addClass('e_vent9');
    }else{
      $('.box04').removeClass('e_vent7');
      $('.box05').removeClass('e_vent8');
      $('.box06').removeClass('e_vent9');
    }

    /*마지막 컨텐츠 스크롤 이벤트 아래에서 위로 올라오는거 */
    if(sposY >=3000){
      $('.woongin5').addClass('e_vent10');
    }else{
      $('.woongin5').removeClass('e_vent10');
    }

/*---------------------------------------------------------- */

    /*태블릿 해상도일때 스크롤 이벤트 */
  
    if(width <= 1024 && width >= 768) {
      $('.tab_con > ul >li:last-child>a').html('놀이의<br>발견')
      $('.woongin2 h2').html('17년간의 IT프로젝트 수행 노하우로 <br> 다져진 웅진의 &#8242;직접경혐&#8242;을 통해 <br> 기업고객을 위한 디지털 비즈니스를 <br> 제공합니다.');

      // window 크기가 768보다 작을때
      //첫번째 컨텐츠
      if(sposY >= 250){
        $('.woongin1 li:first-child').addClass('e_vent1');
        $('.woongin1 li:nth-child(2)').addClass('e_vent2');
        $('.woongin1 li:last-child').addClass('e_vent3');
      }else{
        $('.woongin1 li:first-child').removeClass('e_vent1');
        $('.woongin1 li:nth-child(2)').removeClass('e_vent2');
        $('.woongin1 li:last-child').removeClass('e_vent3');
      }
      
      /*두번째 컨텐츠 왼쪽에서 나오는거*/
      if(sposY >=1250){
        $('.box01').addClass('e_vent4');
        $('.box02').addClass('e_vent5');
        $('.box03').addClass('e_vent6');
      }else{
        $('.box01').removeClass('e_vent4');
        $('.box02').removeClass('e_vent5');
        $('.box03').removeClass('e_vent6');
      }
  
      // 세번째 컨텐츠 중앙에있다가 각자자리가는거
      if(sposY >=1850){
        $('.box04').addClass('e_vent7');
        $('.box05').addClass('e_vent8');
        $('.box06').addClass('e_vent9');
      }else{
        $('.box04').removeClass('e_vent7');
        $('.box05').removeClass('e_vent8');
        $('.box06').removeClass('e_vent9');
      }
  
      /*마지막 컨텐츠 스크롤 이벤트 아래에서 위로 올라오는거 */
      if(sposY >=2900){
        /*mini에 맞추면 3100 */
        $('.woongin5').addClass('e_vent10');
      }else{
        $('.woongin5').removeClass('e_vent10');
      }
    }
/*---------------------------------------------------------- */
    /*모바일 해상도일때 스크롤 이벤트 */
  
    if(width <= 767) {
      //첫번째 박스 클릭되어있도록
      $('.box01').click();

      //3개 네모 나오는거 글씨 줄이기
      $('.box05 > p').html('주요 사업 영역으로는 SAP ERP분야와 스마트공장, 스마트물류에 강점이 있습니다.')

      //cont1 의 마지막 p 태그 바꿔치기
      $('.woongin1 li:last-child > p:last-child').html('경영자문 및 컨설팅,<br> IT 서비스 콜센터 아웃소싱 서비스')
      // cont2 의 h2 태그 바꿔치기
      $('.woongin2 h2').html('17년간의 IT프로젝트 수행 노하우로 <br> 다져진 웅진의 &#8242;직접경혐&#8242;을 통해 <br>기업고객을 위한 디지털 비즈니스를 제공합니다.');
      // window 크기가 768보다 작을때
      //첫번째 컨텐츠
      if(sposY >= 250){
        $('.woongin1 li:first-child').addClass('e_vent1');
        $('.woongin1 li:nth-child(2)').addClass('e_vent2');
        $('.woongin1 li:last-child').addClass('e_vent3');
      }else{
        $('.woongin1 li:first-child').removeClass('e_vent1');
        $('.woongin1 li:nth-child(2)').removeClass('e_vent2');
        $('.woongin1 li:last-child').removeClass('e_vent3');
      }
      
      /*두번째 컨텐츠 왼쪽에서 나오는거*/
      if(sposY >=1150){
        $('.box01').addClass('e_vent4');
        $('.box02').addClass('e_vent5');
        $('.box03').addClass('e_vent6');
      }else{
        $('.box01').removeClass('e_vent4');
        $('.box02').removeClass('e_vent5');
        $('.box03').removeClass('e_vent6');
      }
      /* ----------------------------------------------------------------- */
      //클릭 이벤트 박스 1
      $('.e_vent4').click(function(){
        $('.box01').css("height","275px");
        $('.box01 li:first-child').css("margin"," 50px 0px 0px 40px");

        /*나머지 박스 위치 수정 addClass */
        $('.box02').addClass('to_ggle1');
        $('.box03').addClass('to_ggle2');

        /* 첫번째 박스에있는 2,3번쨰li display block 처리 + 위치조정 클래스부여 */
        $('.box01 li:nth-child(2) ,.box01 li:last-child').addClass('detail1');
        
        /* 선택한 요소 제외하고 다 닫기 */
        $('.box02 li:first-child').css("margin","11px 0px 0px 20px");
        $('.box03 li:first-child').css("margin","11px 0px 0px 20px");
        $('.box02 li:nth-child(2) ,.box02 li:last-child').removeClass('detail1');
        $('.box03 li:nth-child(2) ,.box03 li:last-child').removeClass('detail1');
        $('.box02').css("height","40px");
        $('.box03').css("height","40px");

      });
      
      //클릭 이벤트 박스 2
      $('.e_vent5').click(function(){
        $(this).css("height","275px");
        $('.box02 li:first-child').css("margin"," 50px 0px 0px 40px");

        /*나머지 박스 위치 수정 addClass */
        $('.box02').removeClass('to_ggle1');
        $('.box03').addClass('to_ggle2');
        
        /* 첫번째 박스에있는 2,3번쨰li display block 처리 + 위치조정 클래스부여 */
        $('.box02 li:nth-child(2) ,.box02 li:last-child').addClass('detail1');
        
        /* 선택한 요소 제외하고 다 닫기 */
        $('.box01 li:first-child').css("margin","11px 0px 0px 20px");
        $('.box03 li:first-child').css("margin","11px 0px 0px 20px");
        $('.box01').css("height","40px");
        $('.box03').css("height","40px");
        $('.box01 li:nth-child(2) ,.box01 li:last-child').removeClass('detail1');
        $('.box03 li:nth-child(2) ,.box03 li:last-child').removeClass('detail1');
      });
      
      
      //클릭 이벤트 박스 3
      $('.e_vent6').click(function(){
        $(this).css("height","275px");
        $(this).css("transition","0.5s");
        $('.box03 li:first-child').css("margin"," 50px 0px 0px 40px");

        /*나머지 박스 위치 수정 addClass */
        $('.box02').removeClass('to_ggle1');
        $('.box03').removeClass('to_ggle2');

        /* 첫번째 박스에있는 2,3번쨰li display block 처리 + 위치조정 클래스부여 */
        $('.box03 li:nth-child(2) ,.box03 li:last-child').addClass('detail1');
        
        /* 선택한 요소 제외하고 다 닫기 */
        $('.box01 li:first-child').css("margin","11px 0px 0px 20px");
        $('.box02 li:first-child').css("margin","11px 0px 0px 20px");
        $('.box01').css("height","40px");
        $('.box02').css("height","40px");
        $('.box01 li:nth-child(2) ,.box01 li:last-child').removeClass('detail1');
        $('.box02 li:nth-child(2) ,.box02 li:last-child').removeClass('detail1');
      });

  
      /*-------------------------------------------------------------- */
      // 세번째 컨텐츠 중앙에있다가 각자자리가는거
      if(sposY >=1600){
        $('.box04').addClass('e_vent7');
        $('.box05').addClass('e_vent8');
        $('.box06').addClass('e_vent9');
      }else{
        $('.box04').removeClass('e_vent7');
        $('.box05').removeClass('e_vent8');
        $('.box06').removeClass('e_vent9');
      }
  
      /*마지막 컨텐츠 스크롤 이벤트 아래에서 위로 올라오는거 */
      if(sposY >=2100){
        $('.woongin5').addClass('e_vent10');
      }else{
        $('.woongin5').removeClass('e_vent10');
      }
    }


    if(width <= 376){
      if(sposY >=2300){
        $('.woongin5').addClass('e_vent10');
      }else{
        $('.woongin5').removeClass('e_vent10');
      }

    }
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

  /* viewmore+ 클릭시 사이트 이동하는 함수 */
  $(function(){
    $('.more a').click(function(){
      location.href = 'https://www.woongjin.co.kr/'
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



});