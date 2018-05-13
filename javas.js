$(function(){
  $('.toggleNav').on('click', function(){
    $('.side-nav').css({'transform':'translateX(0)','transition':'.7s','z-index':'200'});
    $('.wrapper').not('.side-nav').addClass('grey-out');
  });
});
$(function(){
  $('.fa-times').on('click', function(){
      $('.side-nav').css({'transform':'translateX(-100%)'});
    $('.wrapper').removeClass('grey-out');
    });
  });

$('.center').slick({
  arrows: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding:'15px',
});

$('.center2').slick({
  arrows: false,
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: false
});

$('.variable-width').slick({
  dots: false,
  arrows: false,
  variableWidth: true,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1
});
