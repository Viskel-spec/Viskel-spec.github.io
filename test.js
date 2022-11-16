$(document).ready(function() {
  function checkWidth() {
    var windowWidth = $('body').innerWidth(),
        elem = $(".number-bullets"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
                                    // страницу для поиска нужного элемента
    if(windowWidth < 1200){
      elem.removeClass('swiper-slider-classic');
      elem.addClass('swiper-container-horizontal');
    }
    else{
      elem.removeClass('swiper-container-horizontal');
      elem.addClass('swiper-slider-classic');
    }
  }

  checkWidth(); // проверит при загрузке страницы

  $(window).resize(function(){
    checkWidth(); // проверит при изменении размера окна клиента
  });
});