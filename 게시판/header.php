<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>웅진그룹</title>
  <!-- 1. css초기화 -->
  <link href="http://chaesuehyun.dothome.co.kr/woogzin/css/reset.css" rel="stylesheet" type="text/css">
  <!-- 2. common서식 -->
  <link href="http://chaesuehyun.dothome.co.kr/woogzin/css/common.css" rel="stylesheet" type="text/css">
  <!--서브 계열사 스타일 서식-->
  <link href="http://chaesuehyun.dothome.co.kr/woogzin/css/family_site.css" rel="stylesheet" type="text/css">

  <!-- 3. main서식 -->
  <link href="http://chaesuehyun.dothome.co.kr/woogzin/css/main.css" rel="stylesheet" type="text/css">
  <!-- 4. 미디어쿼리 서식 -->
  <link href="http://chaesuehyun.dothome.co.kr/woogzin/css/media_tab.css" media="screen and (max-width: 1024px)" rel="stylesheet" type="text/css">
  <link href="http://chaesuehyun.dothome.co.kr/woogzin/css/media_mo.css" media="screen and (max-width: 768px)" rel="stylesheet" type="text/css">

  <!--파비콘 -->
  <link rel="shortcut icon" type="image/x-icon" href="http://chaesuehyun.dothome.co.kr/woogzin/images/fav.png">
  
  <!-- 아이콘폰트 주소 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  
  <!-- 제이쿼리 라이브러리 연결 -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <!--서브페이지 계열사 자바스크립트-->
  <script src="http://chaesuehyun.dothome.co.kr/woogzin/script/fimily_site.js"></script>


</head>
<body>
  <!-- ------------헤더영역----------- -->
  <header>
    <div class="h_inner">
      <!-- 로고 -->
      <h1 class="logo">
        <a href="https://sumincloud.github.io/Project-2/" title="메인페이지로 바로가기">
          <img src="http://chaesuehyun.dothome.co.kr/woogzin/images/logo.png" alt="상단로고">
        </a>
      </h1>
      
      <!-- gnb -->
      <div class="inner1200">
        <nav class="gnb_box">
          <ul class="gnb">
            <li>
              <a href="http://chaesuehyun.dothome.co.kr/woogzin/info_site.html" title="웅진소개">웅진소개</a>
              <ul class="lnb">
                <li><a href="./info_site.html" title="웅진소개">웅진소개</a></li>
                <li><a href="#" title="CI">CI</a></li>
                <li><a href="#" title="연혁">연혁</a></li>
              </ul>
            </li>
            <li>
              <a href="http://chaesuehyun.dothome.co.kr/woogzin/family_site.html" title="계열사">계열사</a>
              <ul class="lnb">
                <li><a href="./family_site.html" title="웅진 IT">웅진 IT</a></li>
                <li><a href="#" title="웅진씽크빅">웅진씽크빅</a></li>
                <li><a href="#" title="웅진북센">웅진북센</a></li>
                <li><a href="#" title="렉스필드컨트리클럽">렉스필드컨트리클럽</a></li>
                <li><a href="#" title="웅진플레이도시">웅진플레이도시</a></li>
                <li><a href="#" title="웅진컴퍼스">웅진컴퍼스</a></li>
                <li><a href="#" title="웅진헬스원">웅진헬스원</a></li>
                <li><a href="#" title="놀이의 발견">놀이의 발견</a></li>
              </ul>
            </li>
            <li>
              <a href="#" title="지속가능경영">지속가능경영</a>
              <ul class="lnb">
                <li><a href="#" title="웅진재단">웅진재단</a></li>
                <li><a href="#" title="사회공헌">사회공헌</a></li>
                <li><a href="#" title="윤리경영">윤리경영</a></li>
              </ul>
            </li>
            <li>
              <a href="#" title="소식">소식</a>
              <ul class="lnb">
                <li><a href="#" title="공지사항">공지사항</a></li>
                <li><a href="#" title="언론보도">언론보도</a></li>
                <li><a href="#" title="홍보자료실">홍보자료실</a></li>
              </ul>
            </li>
            <li>
              <a href="http://chaesuehyun.dothome.co.kr/woogzin/hire_site.html" title="인재채용">인재채용</a>
              <ul class="lnb">
                <li><a href="./hire_site.html" title="인재상">인재상</a></li>
                <li><a href="#" title="인사제도">인사제도</a></li>
                <li><a href="#" title="직무소개">직무소개</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      
      <!-- util -->
      <div class="util">
        <div class="qna"><a href="#" title="문의하기">문의하기</a></div>
        <div class="select">
          <div class="selected">
            <div class="selected-value">한국어</div>
            <div class="arrow"></div>
          </div>
          <ul>
            <li class="option">한국어</li>
            <li class="option">English</li>
            <li class="option">中國語</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 토글버튼 -->
    <input type="checkbox" id="toggle">
    <label for="toggle">
      <i class="fas fa-bars"></i>
    </label>
    <!-- 태블릿&모바일 토글 메뉴바 -->
    <div id="toggle_bg"></div>
    <nav id="toggle_menu">
      <img src="http://chaesuehyun.dothome.co.kr/woogzin/images/logo.png" alt="상단로고">
      <label for="toggle" class="fas fa-times"></label>
      <ul id="t_gnb">
        <li>
          <p>웅진소개<i class="fas fa-angle-down"></i></p>
          <ul id="t_sub">
            <li><a href="http://chaesuehyun.dothome.co.kr/woogzin/info_site.html" title="웅진소개">웅진소개</a></li>
            <li><a href="#" title="CI">CI</a></li>
            <li><a href="#" title="연혁">연혁</a></li>
          </ul>
        </li>
        <li>
          <p>계열사<i class="fas fa-angle-down"></i></p>
          <ul id="t_sub">
            <li><a href="http://chaesuehyun.dothome.co.kr/woogzin/family_site.html" title="웅진 IT">웅진 IT</a></li>
            <li><a href="#" title="웅진씽크빅">웅진씽크빅</a></li>
            <li><a href="#" title="웅진북센">웅진북센</a></li>
            <li><a href="#" title="렉스필드컨트리클럽">렉스필드컨트리클럽</a></li>
            <li><a href="#" title="웅진플레이도시">웅진플레이도시</a></li>
            <li><a href="#" title="웅진컴퍼스">웅진컴퍼스</a></li>
            <li><a href="#" title="웅진헬스원">웅진헬스원</a></li>
            <li><a href="#" title="놀이의 발견">놀이의 발견</a></li>
          </ul>
        </li>
        <li>
          <p>지속가능경영<i class="fas fa-angle-down"></i></p>
          <ul id="t_sub">
            <li><a href="#" title="웅진재단">웅진재단</a></li>
            <li><a href="#" title="사회공헌">사회공헌</a></li>
            <li><a href="#" title="윤리경영">윤리경영</a></li>
          </ul>
        </li>
        <li>
          <p>소식<i class="fas fa-angle-down"></i></p>
          <ul id="t_sub">
            <li><a href="#" title="공지사항">공지사항</a></li>
            <li><a href="#" title="언론보도">언론보도</a></li>
            <li><a href="#" title="홍보자료실">홍보자료실</a></li>
          </ul>
        </li>
        <li>
          <p>인재채용<i class="fas fa-angle-down"></i></p>
          <ul id="t_sub">
            <li><a href="http://chaesuehyun.dothome.co.kr/woogzin/hire_site.html" title="인재상">인재상</a></li>
            <li><a href="#" title="인사제도">인사제도</a></li>
            <li><a href="#" title="직무소개">직무소개</a></li>
          </ul>
        </li>
      </ul>
      <!-- 문의하기, 언어설정 -->
      <div class="util">
        <div class="qna"><a href="#" title="문의하기">문의하기</a></div>
        <div class="select">
          <div class="selected">
            <div class="selected-value">한국어</div>
            <div class="arrow"></div>
          </div>
          <ul>
            <li class="option">한국어</li>
            <li class="option">English</li>
            <li class="option">中國語</li>
          </ul>
        </div>
      </div>
    </nav>
  </header>