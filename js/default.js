$(document).ready(function() {
  /* 메뉴생성 */
  $('.menu-toggle').on('click', function() {
    $('.full-gnb').toggleClass('active');
    $(this).toggleClass('active');
  })

  /* 화면 스크롤시 버튼 생성 (챗봇 & 위로) */
  const $btnTop = $('#btn_top');
  $(window).on('scroll', function() {
      const scrollTop = $(window).scrollTop();
      if (scrollTop > 500) {
        if ($btnTop.is(':hidden')) {
          $btnTop.fadeIn(100);
        }
      } else {
        if ($btnTop.is(':visible')) {
          $btnTop.fadeOut(100);
        }
      }
      const scrollBottom = $(document).height() - (scrollTop + $(window).height());
      if (scrollBottom < 240) {
          $('#btn_chatbot').parent().css('bottom', 295 + 'px');
      } else {
          $('#btn_chatbot').parent().css('bottom', 55 + 'px');
      }
  });

  $btnTop.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: 0
      }, 100); // 0.5초 동안 부드럽게 이동
  });

  $(window).trigger('scroll');

  /* 탭기능 공통 */
  $('.tabitem').on('click', function() {
    i = $(this).index();
    console.log(i);
    $(this).parent().find('.tabitem').removeClass('active');
    $(this).addClass('active');
    $(this).parent().parent().find('.tabCont').find('.tabContIn').removeClass('active');
    $(this).parent().parent().find('.tabCont').find('.tabContIn').eq(i).addClass('active');
  });

  /* 서브메뉴 슬라이드 애니메이션 */
  $('.sub-nlist > li').hover(function() {
    if ($(this).hasClass('active') == false) {
      $(this).find('.subin-nlist').slideDown(200).clearQueue();
      $(this).find('.subin-nlist').css('display','flex');
    }
  },function(){
    if ($(this).hasClass('active') == false) {
      $(this).find('.subin-nlist').slideUp(0);
    }
	});

  /* 어코디언메뉴 */
  $('.actitle').click(function(){
    $('.actitle').removeClass('active');
    $(this).addClass('active');
    $('.acitem').slideUp(0);
    $(this).next('.acitem').slideToggle(200);
  });
});